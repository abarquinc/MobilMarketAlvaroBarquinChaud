const express = require("express");

const router = express.Router();
const multer = require('multer');

const productsMetodos = require("../controllers/productsControlador");

const uploadProductImage = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware')


const {list,detalle} = require("../controllers/productsControlador");

router.get('/api/productos', list)
router.get('/api/detalle/:id?', detalle)



router.get('/carrito', productsMetodos.carrito);

router.get('/producto', productsMetodos.producto);

router.get('/productos', productsMetodos.productos);

router.get('/create', productsMetodos.create);

router.post('/create',  uploadProductImage.uploadProductImage.single('foto') ,productsMetodos.save);

router.get('/detail/:id', productsMetodos.detail);

router.get('/edit/:id', productsMetodos.editarproducto);

router.put('/edit/:id', productsMetodos.update);

router.get('/delete/:id',productsMetodos.delete);



module.exports = router;