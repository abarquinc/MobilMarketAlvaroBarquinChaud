const path = require("path");
const fs = require('fs');
const { log } = require("console");
const { json } = require("express");



const db = require('../../database2/models');

const Producto = db.Producto;


const productsMetodos = {
  list: async (req,res)=> {
    try {
   const productos = await Producto.findAll()

      const response = { 
        meta:{
          status: 200,
          message: "Perfecto!!",
          count: productos.length
        },
        data: productos
      }
      res.status(200).json(response)
    } catch (error) {
      console.log(error);
      
    }


  },

  detalle: async(req,res) => {
    try {
      const producto = await Producto.findByPk(req.params.id || req.query.id)
      
      const response = { 
        meta:{
          status: 200,
          message: "Perfecto!!",
          
        },
        data: producto
      }
    res.status(200).json(response)

    } catch (error) {
      console.log(error);
    }


  },

  carrito: (req, res) => { res.render("../views/products/carrito") },

  producto: (req, res) => { res.render("../views/products/producto") },

  productos: async (req, res) => {
    try {
      const productos = await db.Producto.findAll();
      res.render("../views/products/productos", { productos });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al obtener los productos');
    }
  },



create: async (req, res) => {
  try {
      const categorias = await db.Categoria_producto.findAll();
      const colores = await db.Color.findAll();
      res.render('../views/products/nuevoproducto.ejs', { categorias, colores });
  } catch (error) {
      console.log(error);
      res.status(500).send('Error al obtener las categorías y colores');
  }
},

  save: async (req, res) => {
    try {
      const nuevoProducto = await db.Producto.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria_id: req.body.categoria_id,
        precio: req.body.precio,
        descuento: req.body.descuento,
        color_id: req.body.color_id,
        memoria: req.body.memoria,
        foto:req.file.filename 
      });
      res.redirect('/productos');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al guardar el nuevo producto');
    }
  },

  detail: async (req, res) => {
    try {
      const producto = await db.Producto.findByPk(req.params.id);
      res.render("../views/products/detail", { producto });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al obtener el detalle del producto');
    }
  },

 
  editarproducto: async (req, res) => {
    try {
        const productoEditar = await db.Producto.findByPk(req.params.id);
        res.render("../views/products/editarproducto", { productoEditar });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener el producto para editar');
    }
},

  update: async (req, res) => {
    try {
      await db.Producto.update({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria_id: req.body.categoria_id,
        precio: req.body.precio,
        descuento: req.body.descuento,
        color_id: req.body.color_id,
        memoria: req.body.memoria
      }, {
        where: { id: req.params.id }
      });
      res.redirect('/productos');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al actualizar el producto');
    }
  },

  delete: async (req, res) => {
    try {
      await db.Producto.destroy({
        where: { id: req.params.id }
      });
      res.redirect('/productos');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error al eliminar el producto');
    }
  }
}

module.exports = productsMetodos;


