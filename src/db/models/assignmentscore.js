'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssignmentScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AssignmentScore.belongsTo(models.Assignment, {foreignKey:'assignmentId', as: 'assignment'});
      AssignmentScore.belongsTo(models.User, {foreignKey: 'studentId', as: 'student'});
      AssignmentScore.belongsTo(models.User, {foreignKey: 'teacherId', as: 'teacher'});
    }
  }
  AssignmentScore.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    assignmentId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    },
    score: {
      type:DataTypes.STRING,
      allowNull:false
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull:false,
      foreignKey:true
    }
  }, {
    sequelize,
    modelName: 'AssignmentScore',
  });
  return AssignmentScore;
};