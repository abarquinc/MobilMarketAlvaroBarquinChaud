'use strict';



module.exports = {
    up: async(QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('Categoria_Productos',[
            {
                nombre:'Celular',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre:'Cargador',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre:'Auriculares',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            
        ],{});
    },

    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkDelete('Categoria_Productos',null,{})
    }

}