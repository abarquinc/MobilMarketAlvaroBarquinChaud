'use strict';




module.exports = {
    up: async(QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('Colores',[
            {
                nombre:'Blanco',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre:'Negro',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre:'Gris',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nombre:'Azul',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ],{});
    },

    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkDelete('Colores',null,{})
    }

}