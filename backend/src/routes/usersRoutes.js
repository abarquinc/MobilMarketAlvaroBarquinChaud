const express = require("express");
const router = express.Router();
const path = require( 'path');


const usersMetodos = require("../controllers/usersControlador");

//Middlewares
const uploadUserImage = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')

const {list,perfilUsuario} = require("../controllers/usersControlador");


router.get('/api/usuarios', list)
router.get('/api/profile/:id?', perfilUsuario)



router.get('/registro', guestMiddleware,usersMetodos.registro);

router.post('/registro',  uploadUserImage.uploadUserImage.single('foto'), validations ,usersMetodos.registrarse)

router.get('/login', guestMiddleware,usersMetodos.login);

router.post('/login', usersMetodos.loginProcess);

router.get('/perfil', authMiddleware,usersMetodos.profile);

router.get('/logout/', usersMetodos.logout);


module.exports = router;