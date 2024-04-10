
const db = require("../../database2/models")
const path = require("path");

const mainMetodos = { 
    home:async (req,res) => {
        const usuarios = await db.Usuario.findAll();
        const colores = await db.Color.findAll();
           
        
        res.render("home");
    },

    index: async(req,res) => {
        res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API de Productos y Usuarios</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #000000; /* Fondo negro */
            color: #ffffff; /* Texto blanco */
            padding: 20px;
        }
        h1 {
            color: #6a0dad; /* Violeta */
        }
        p {
            color: #ffffff; /* Texto blanco */
        }
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        li {
            margin-bottom: 10px;
        }
        a {
            color: #ffffff; /* Texto blanco */
            background-color: #6a0dad; /* Violeta */
            padding: 5px 10px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Bienvenido a la API de Productos y Usuarios</h1>
    <p>Aquí tienes algunos endpoints para acceder a productos y usuarios:</p>
    <h2>Productos</h2>
    <ul>
        <li><a href="/api/productos">Obtener todos los productos</a></li>
        <li><a href="/detail/1">Obtener detalles de un producto específico</a></li>
        <li><a href="/create">Crear un nuevo producto</a></li>
        <li><a href="/edit/1">Actualizar un producto existente</a></li>
        <li><a href="/delete/1">Borrar un producto</a></li>
    </ul>
    <h2>Usuarios</h2>
    <ul>
        <li><a href="/api/usuarios">Obtener todos los usuarios</a></li>
        <li><a href="/api/profile/1>Obtener detalles de un usuario específico</a></li>
        <li><a href="/register">Crear un nuevo usuario</a></li>
       
    </ul>
</body>
</html>
`)
    }

};

module.exports = mainMetodos;
