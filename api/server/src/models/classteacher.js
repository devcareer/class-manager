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
      // define association here
    }
  }
  ClassTeacher.init({
    classId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassTeacher',
  });
  return ClassTeacher;
};