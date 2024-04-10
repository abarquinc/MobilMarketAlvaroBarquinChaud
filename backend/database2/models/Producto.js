module.exports = (sequelize, DataTypes) => {
  let alias = "Producto"
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    categoria_id: {  
      type: DataTypes.INTEGER,
     
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2)
    },
    descuento: {
      type: DataTypes.DECIMAL(5, 2)
    },
    color_id: {
      type: DataTypes.INTEGER,
      
  },

    memoria: {
      type: DataTypes.STRING
    },

    foto: {
      type: DataTypes.STRING
    },

    createdAt:{
      type: DataTypes.DATE,

    },
    updatedAt:{
      type: DataTypes.DATE,
      
    },
    deletedAt:{
      type: DataTypes.DATE,
      
    }
}
  let configuration = {
    tableName: "Productos",
    timestamp: true,
    paranoid: true
  }

  const Producto = sequelize.define(alias,colums,configuration)


  Producto.associate = (models) => {
   
    Producto.belongsTo(models.Categoria_producto, { foreignKey: 'categoria_id', as: 'categoria' });
    Producto.belongsTo(models.Color, { foreignKey: 'color_id', as: 'color' });
  };

  return Producto

}