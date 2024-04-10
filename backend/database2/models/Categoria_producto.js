module.exports = (sequelize, DataTypes) => {
  let alias = "Categoria_producto"
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
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
    tableName: "Categoria_productos",
    timestamp: true,
    paranoid: true
  }

  const Categoria_producto = sequelize.define(alias,colums,configuration)

  Categoria_producto.associate = (models) => {
    Categoria_producto.hasMany(models.Producto, { foreignKey: 'categoria_id' });
  };

  return Categoria_producto

}