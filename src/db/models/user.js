'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Assignment, {foreignKey: 'studentId', as: 'studentAssignment'})
      User.hasMany(models.Assignment, {foreignKey: 'teacherId', as: 'teacherAssignment'})
      User.hasMany(models.AssignmentScore, {foreignKey: 'assignmentScoreId', as: 'assignmentScore'})
      User.hasMany(models.Message, {foreignKey: 'senderId', as: 'sender'});
      User.hasMany(models.Message, {foreignKey: 'receiverId', as: 'receiver'});
      User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
      User.hasOne(models.Token, {foreignKey: 'userId', as: 'user'});
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
    verify: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull:false
    },
  //   roleSlug: {
  //     type: DataTypes.VIRTUAL,
  //     get() {
  //       const r = db.Role.findOne({
  //         where: { id: this.roleId }
  //       })
  //       return `${r.slug}`;
  //     },set(value) {
  //       throw new Error('Do not try to set the `fullName` value!');
  //     }
  // }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};