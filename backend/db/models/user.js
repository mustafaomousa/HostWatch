'use strict';

const { Model } = require('sequelize');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Expense, {foreignKey: "userId"});
      User.hasMany(models.Trip, {foreignKey: "userId"});
      User.hasMany(models.Vehicle, {foreignKey: "userId"});
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail(value) {
          if (Validator.isNotEmail(value)) {
            throw new Error('Must be a valid email.')
          }
        }
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};