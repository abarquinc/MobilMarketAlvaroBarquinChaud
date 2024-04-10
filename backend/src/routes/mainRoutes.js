const express = require("express");

const router = express.Router();

const mainMetodos = require("../controllers/mainControlador");

router.get('/', mainMetodos.home);

router.get('/index', mainMetodos.index);


module.exports = router