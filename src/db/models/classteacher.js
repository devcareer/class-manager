'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassTeacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClassTeacher.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      ClassTeacher.belongsTo(models.User, {foreignKey: 'teacherId', as: 'teacher'});
    }
  }
  ClassTeacher.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    teacherId:{
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    },
    classId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    }
  }, {
    sequelize,
    modelName: 'ClassTeacher',
  });
  return ClassTeacher;
};