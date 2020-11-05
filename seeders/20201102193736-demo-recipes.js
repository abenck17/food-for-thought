'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          name: 'chicken and Rice', 
          calorie: 574, 
          fat: 29, 
          carb: 47, 
          protein: 28,
          userId: 1,
          link: "https://www.recipetineats.com/oven-baked-chicken-and-rice/", 
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: 'Beef and Broccoli', 
          calorie: 398, 
          fat: 16, 
          carb: 26, 
          protein: 40,
          userId: 2,
          link: "https://www.thespruceeats.com/healthy-beef-and-broccoli-stir-fry-2238573",  
          createdAt: new Date(),
          updatedAt: new Date(),
      }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('people', null, {});
     */
  }
};
