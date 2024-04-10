module.exports = (sequelize, DataTypes) => {
  let alias = "Color"
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
    tableName: "Colores",
    timestamp: true,
    paranoid: true
  }

  const Color = sequelize.define(alias,colums,configuration)
  
  Color.associate = (models) => {
    Color.hasMany(models.Producto, { foreignKey: 'color_id' });
  };

  return Color

}