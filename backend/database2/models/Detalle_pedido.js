module.exports = (sequelize, DataTypes) => {
  let alias = "Detalle_pedido"
  let colums = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cantidad: {
      type: DataTypes.INTEGER
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2)
    },
    descuento: {
      type: DataTypes.DECIMAL(5, 2)
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
    tableName: "Detalle_pedidos",
    timestamp: true,
    paranoid: true
  }

  const Detalle_pedido = sequelize.define(alias,colums,configuration)

  Detalle_pedido.associate = (models) => {
    Detalle_pedido.belongsTo(models.Pedido);
  };

  return Detalle_pedido

}