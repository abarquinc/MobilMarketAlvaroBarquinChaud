'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      categoria_id: {  
        type: Sequelize.INTEGER,
        references:{
          model:"Categoria_Productos",
          key:"id"
        }
        
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2)
      },
      descuento: {
        type: Sequelize.DECIMAL(5, 2)
      },
      color_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Colores",
          key:"id"
        }
        
       
        
    },
      memoria: {
        type: Sequelize.STRING
      },

      foto: {
        type: Sequelize.STRING
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      ,
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};