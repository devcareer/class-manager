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
    }
  }
  AssignmentScore.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    assignmentId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    score: {
      type:DataTypes.STRING,
      allowNull:false
    },
    studentId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    teacher: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'AssignmentScore',
  });
  return AssignmentScore;
};