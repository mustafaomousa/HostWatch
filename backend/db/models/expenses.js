'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Expenses.belongsTo(models.Trip, {foreignKey: "tripId"});
      Expenses.belongsTo(models.User, {foreignKey: "userId"});
      Expenses.belongsTo(models.Vehicle, {foreignKey: "vehicleId"});
    }
  };
  Expenses.init({
    expenseSummary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expenseAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Expenses',
  });
  return Expenses;
};