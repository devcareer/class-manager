'use strict';
const {
  Model
} = require('sequelize');
const assignment = require('./assignment');
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
<<<<<<< HEAD
      User.belongsTo(models.Message, {foreignKey: 'sender', as: 'sender'});
      User.belongsTo(models.Message, {foreignKey: 'receiver', as: 'receiver'});
=======
      User.hasMany(models.Message, {foreignKey: 'senderId', as: 'sender'});
      User.hasMany(models.Message, {foreignKey: 'receiverId', as: 'receiver'});
>>>>>>> 8f085e4edb2023272ebca0171aabbffe9a8178dd
      User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
    }
  }
  User.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    first_name: {
      allowNull: false, type:DataTypes.STRING
    },
    last_name: {
      allowNull: false, type:DataTypes.STRING
    },
    second_name: DataTypes.STRING,
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