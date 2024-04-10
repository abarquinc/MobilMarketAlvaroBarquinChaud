const bcryptjs = require('bcryptjs'); 
const {validationResult}= require('express-validator');
const path = require("path");
 const Usuario = require('../tools/Usuario')

const db = require ('../../database2/models')
const Usuarios = db.Usuario;

const usersMetodos = {
    
    list: async (req,res)=> {
        try {
       const usuarios = await Usuarios.findAll()
    
          const response = { 
            meta:{
              status: 200,
              message: "Perfecto!!",
              count: usuarios.length
            },
            data: usuarios
          }
          res.status(200).json(response)
        } catch (error) {
          console.log(error);
          
        }
    
    
      },
    
    perfilUsuario:async(req,res) => {
        try {
          const usuario = await Usuarios.findByPk(req.params.id || req.query.id)
           
            let response;

            if (usuario) {
                 response = { 
                    meta:{
                      status: 200,
                      message: "Usuario encontrado!!",
                      
                    },
                    data: usuario
                  }
            } else {
                 response = { 
                    meta:{
                      status: 400,
                      message: "Usuario inexistente",
                      
                    },
                    data: usuario
                  }
            }

          
        res.json(response)
    
        } catch (error) {
          console.log(error);
        }
    
    
      },
    
    
    
    
    
    
    
    registro: (req, res) => { res.render("../views/users/registro") },



registrarse: async (req, res) => {
    try {
        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            return res.render("../views/users/registro" , {
                errors: resultValidation.mapped(),
                oldData: req.body,
            })
    }

        let userInDB = await db.Usuario.findOne({
            where: {
                email: req.body.email
        }
        });

        if (userInDB) {
            return res.render("../views/users/registro", {
                errors: {
                    email: {
                        msg: 'Email ya registrado, intenta con uno distinto'
                    }
                },
                oldData: req.body,
            });
        }

        let hashedPassword = bcryptjs.hashSync(req.body.password, 10);

        await db.Usuario.create({
            ...req.body,
            password: hashedPassword,
            foto: req.file.filename 
        });

        return res.redirect("/login");
    } catch (error) {
        console.log(error);
        return res.render("../views/error", { error: "Hubo un error en el registro." });
    }
},


    login: (req, res) => { 
        res.render("../views/users/login") 
    },

    

    loginProcess: async (req, res) => {
        try {
            let userLogIn = await db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            });
    
            if (userLogIn) {
                let contraseñaCorrecta = bcryptjs.compareSync(req.body.password, userLogIn.password);
    
                if (contraseñaCorrecta) {
                    delete userLogIn.contraseña;
                    req.session.userLogged = userLogIn;

                    if(req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
    
                
                    
                    return res.redirect('perfil');
                }
            }
    
            return res.render("../views/users/login", {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        } catch (error) {
            console.log(error);
            return res.render("../views/error", { error: "Hubo un error en el proceso de inicio de sesión." });
        }
       
    },

    profile: (req, res) => {
        
        
		return res.render('../views/users/perfil',{
            user: req.session.userLogged
        });
	},

    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = usersMetodos;