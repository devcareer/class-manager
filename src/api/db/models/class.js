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
<<<<<<< HEAD
      Class.hasMany(models.ClassStudent, {as: 'student'});
=======
      // Class.hasMany(models.ClassStudent, {as: 'student'});
>>>>>>> 8f085e4edb2023272ebca0171aabbffe9a8178dd
      Class.hasMany(models.User, {as: 'teacher'});

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