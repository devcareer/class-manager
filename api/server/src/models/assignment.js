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
    }
  }
  Assignment.init({
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    assignment:{
       type: DataTypes.STRING,
       allowNull:false
    },
    classId:{
      type: DataTypes.STRING,
      allowNull:false
   },
   studentId:{
    type: DataTypes.STRING,
    allowNull:false
  }
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};