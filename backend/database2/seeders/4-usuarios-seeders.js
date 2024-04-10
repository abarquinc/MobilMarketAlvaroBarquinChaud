'use strict';

module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Aquí defines los datos que deseas agregar
//     let usuarios = [
    up: async(QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('Usuarios',[
      {
        nombre: 'Alvaro',
        email: 'alvaro@gmail.com',
        rol: 'administrador',
        password: 'password1',
        foto: 'default-perfil.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Anton',
        email: 'anton@gmail.com',
        rol: 'usuario',
        password: 'password1',
        foto: 'default-perfil.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Agrega más objetos de usuarios según sea necesario
    ])},

    

  down: async (queryInterface, Sequelize) => {
    // Aquí puedes revertir los cambios si es necesario
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};