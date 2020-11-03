'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          name: 'chicken and Rice', 
          calorie: 580, 
          fat: 25, 
          carb: 80, 
          protein: 65,
          userId: 1, 
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: 'Beef and Broccoli', 
          calorie: 720, 
          fat: 38, 
          carb: 50, 
          protein: 70,
          userId: 2, 
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
