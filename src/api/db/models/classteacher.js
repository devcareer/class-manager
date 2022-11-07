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
      Class.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      Class.belongsTo(models.User, {foreignKey: 'teacherId', as: 'teacher'});
    }
  }
  ClassTeacher.init({
    id:{
      type: DataTypes.UUID,
      allowNull:false
    },
    teacherId:{
      type: DataTypes.UUID,
      allowNull:false
    },
    classId: {
      type: DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'ClassTeacher',
  });
  return ClassTeacher;
};