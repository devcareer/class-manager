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
      Notice.belongsTo(models.Class, {foreignKey: 'classId', as: 'class'});
      Notice.belongsTo(models.User, {foreignKey: 'teacherId', as: 'user'});
    }
  }
  Notice.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    notice: {
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey: true
    },
    classId: {
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
    modelName: 'Notice',
  });
  return Notice;
};