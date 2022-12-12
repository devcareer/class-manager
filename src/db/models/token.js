'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Token.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
    }
  }
  Token.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    token: DataTypes.STRING,
    userId:{
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
   },
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};