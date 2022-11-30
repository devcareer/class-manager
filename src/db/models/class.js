'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.hasMany(models.ClassStudent, {as: 'student'});
      Class.hasMany(models.ClassTeacher, {foreignKey: 'teacherId', as: 'classTeacher'});

    }
  }
  Class.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    className: {
      type:DataTypes.STRING,
      allowNull:false
    },
    year: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};