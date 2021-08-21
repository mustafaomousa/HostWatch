'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trip.init({
    startDate: DataTypes.DATEONLY,
    earnings: DataTypes.INTEGER,
    reinbursements: DataTypes.INTEGER,
    endDate: DataTypes.DATEONLY,
    milesDriven: DataTypes.INTEGER,
    vehicleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    receiptUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};