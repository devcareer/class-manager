'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.belongsTo(models.User, {foreignKey: 'sender', as: 'sender'});
      Class.belongsTo(models.User, {foreignKey: 'receiver', as: 'receiver'});
    }
  }
  Message.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    message: {
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey: true
    },
    senderId:{
      type:DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    },
    receiverId:{
      type:DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    }

  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};