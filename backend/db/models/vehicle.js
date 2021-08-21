'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehicle.hasMany(models.Expense, {foreignKey: "vehicleId"});
      Vehicle.hasMany(models.Trip, {foreignKey: "vehicleId"});

      Vehicle.belongsTo(models.User, {foreignKey: "userId"});
    }
  };
  Vehicle.init({
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startingMileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    picturesUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};