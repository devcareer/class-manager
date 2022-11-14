'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      Assignment.belongsTo(models.User, {foreignKey: 'teacherId', as:   'teacher'});
=======
      // Assignment.belongsTo(models.User, {foreignKey: 'teacherId', as:   'teacher'});
>>>>>>> 8f085e4edb2023272ebca0171aabbffe9a8178dd
      Assignment.belongsTo(models.User, {foreignKey: 'studentId', as:   'student'});
      Assignment.belongsTo(models.Class, {foreignKey: 'classId', as:   'class'});
    }
  }
  Assignment.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    assignment:{
       type: DataTypes.STRING,
       allowNull:false
    },
    classId:{
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
   },
   teacherId:{
    type: DataTypes.UUID,
<<<<<<< HEAD
    allowNull:false
=======
    allowNull:false,
    foreignKey:true
>>>>>>> 8f085e4edb2023272ebca0171aabbffe9a8178dd
 },
   studentId:{
    type: DataTypes.UUID,
    allowNull:false,
    foreignKey:true
  }
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};