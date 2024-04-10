module.exports = (sequelize, DataTypes) => {
  let alias = "Usuario"
  let colums = {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
        autoIncrement: true,
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    rol:{
      type: DataTypes.STRING,
      allowNull: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true
    },
    foto:{
      type: DataTypes.STRING,
      allowNull: true
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
    tableName: "Usuarios",
    timestamp: true,
    paranoid: true
  }

  const Usuario = sequelize.define(alias,colums,configuration)

  Usuario.associate = (models) => {
    Usuario.hasMany(models.Pedido);
  };

  return Usuario

}