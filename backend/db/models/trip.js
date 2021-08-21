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
      // Trip.hasMany(models.Expense);
      
      Trip.belongsTo(models.Vehicle, {foreignKey: "vehicleId"});
      Trip.belongsTo(models.User, {foreignKey: "userId"});
    }
  };
  Trip.init({
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    earnings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reinbursements: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    milesDriven: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receiptUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};