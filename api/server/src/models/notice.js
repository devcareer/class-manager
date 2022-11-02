'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notice.init({
    notice: {
      type:DataTypes.STRING,
      allowNull:false
    },
    classId: {
      type: DataTypes.UUID,
      allowNull:false
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Notice',
  });
  return Notice;
};