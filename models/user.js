'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Recipe, { foreignKey: "userId" });
    }
  };
  User.init({
    Name: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Weight: DataTypes.INTEGER,
    Age: DataTypes.INTEGER,
    Goal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};