module.exports = (sequelize, DataTypes) => {
  let alias = "Pedido"
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha_pedido: {
      type: DataTypes.DATE
    },
    estado: {
      type: DataTypes.STRING
    },
    direccion_envio: {
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
    tableName: "Pedidos",
    timestamp: true,
    paranoid: true
  }

  const Pedido = sequelize.define(alias,colums,configuration)


  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario);
    Pedido.hasMany(models.Detalle_pedido);
  };

  return Pedido

}