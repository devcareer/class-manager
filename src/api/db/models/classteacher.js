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
<<<<<<< HEAD
      Class.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      Class.belongsTo(models.User, {foreignKey: 'teacherId', as: 'teacher'});
=======
      ClassTeacher.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      ClassTeacher.belongsTo(models.User, {foreignKey: 'teacherId', as: 'teacher'});
>>>>>>> 8f085e4edb2023272ebca0171aabbffe9a8178dd
    }
  }
  ClassTeacher.init({
    id:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true
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