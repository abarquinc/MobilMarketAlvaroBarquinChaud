const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Ingrese su nombre'),
    body('email').notEmpty().withMessage('Ingrese su e-mail').bail()
    .isEmail().withMessage('Ingrese un formato de e-mail'),
    body('password').isLength({min:6}).withMessage('Debe tener como minimo 6 caracteres'),
    body('confirmar_password').custom((value,{req})=>{
        if(req.body.password == value){
            return true;
        }else{
            return false;
        }
    }).withMessage('Las contraseñas deben ser iguales'),
    body('foto').custom((value, {req})=>{
        let file = req.file;
        let acceptedExtension = ['.jpg','.png','.gif']
        if(!file)   {
            throw new Error('Debes subir una foto');
        }else{
           let fileExtension = path.extname(file.originalname);
           if(!acceptedExtension.includes(fileExtension)){
            throw new Error (`Las extensiones de archivos permitidas son ${acceptedExtension.join(', ')}`);
           }
        }
        return true;
    })
];