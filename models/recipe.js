'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Recipe.init({
    name: DataTypes.STRING,
    calorie: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    carb: DataTypes.INTEGER,
    protein: DataTypes.INTEGER, 
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};