module.exports = {
    // up: async (queryInterface, Sequelize) => {
    //   // Aquí defines los datos que deseas agregar
    //   let productos = [
        up: async(QueryInterface, Sequelize) => {
            await QueryInterface.bulkInsert('Productos',[
        {
          nombre: 'Iphone 13',
          descripcion: 'S',
          categoria_id: 1,
          precio: 250000.00,
          descuento: 15.00,
          color_id: 1,
          memoria: '128GB',
          foto: 'iphone13-frontal.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            nombre: 'Samsung A23',
            descripcion: '5G',
            categoria_id: 1,
            precio: 100000.00,
            descuento: 10.00,
            color_id: 3,
            memoria: '128GB',
            foto: 'relacionado1.jpeg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nombre: 'Auriculares Motorola',
            descripcion: 'Inalambricos',
            categoria_id: 2,
            precio: 34000.00,
            descuento: 10.00,
            color_id: 3,
            memoria: '0',
            foto: 'relacionado3.jpeg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nombre: 'Cargador Motorola',
            descripcion: 'Carga-rapida',
            categoria_id: 2,
            precio: 20000.00,
            descuento: 25.00,
            color_id: 2,
            memoria: '0',
            foto: 'relacionado4.jpeg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        // Agrega más objetos de productos según sea necesario
      ])},
  
      
  
    down: async (queryInterface, Sequelize) => {
      // Aquí puedes revertir los cambios si es necesario
      await queryInterface.bulkDelete('Productos', null, {});
    }
  };