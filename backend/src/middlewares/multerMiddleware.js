const path = require("path");
const multer = require('multer');
const { body } = require('express-validator');

const usuarioStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/users');
    },
    filename: (req,file,cb)  => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
})

const productoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/productos');
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

// const uploadUserImage = multer({ storage: usuarioStorage });

// const uploadProductImage = multer({ storage: productoStorage });

// const uploadFile = multer({ storage });

// module.exports = uploadFile;

const uploadUserImage = multer({ storage: usuarioStorage });
const uploadProductImage = multer({ storage: productoStorage });

module.exports = { uploadUserImage, uploadProductImage };