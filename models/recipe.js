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
    Name: DataTypes.STRING,
    Calorie: DataTypes.INTEGER,
    Fat: DataTypes.INTEGER,
    Carb: DataTypes.INTEGER,
    Protein: DataTypes.INTEGER, 
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};