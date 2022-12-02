'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Assignment, {foreignKey: 'assignmentId', as: 'assignment'})
      User.hasMany(models.AssignmentScore, {foreignKey: 'assignmentScoreId', as: 'assignmentScore'})
      User.hasMany(models.Message, {foreignKey: 'senderId', as: 'sender'});
      User.hasMany(models.Message, {foreignKey: 'receiverId', as: 'receiver'});
      User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
    }
  }
  User.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: {
      allowNull: false, type:DataTypes.STRING
    },
    lastName: {
      allowNull: false, type:DataTypes.STRING
    },
    secondName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};