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
      ClassStudent.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      ClassStudent.belongsTo(models.User, {foreignKey: 'studentId', as: 'student'});
    }
  }
  ClassStudent.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique:true,
      primaryKey: true
    },
    studentId:{
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
    modelName: 'ClassStudent',
  });
  return ClassStudent;
};