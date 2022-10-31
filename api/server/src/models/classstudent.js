'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassStudent.init({
    classId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassStudent',
  });
  return ClassStudent;
};