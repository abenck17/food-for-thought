'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Recipes",
      [
        {
          Name: 'Chicken and Rice', 
          Calorie: 580, 
          Fat: 25, 
          Carb: 80, 
          Protein: 65, 
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          Name: 'Beef and Broccoli', 
          Calorie: 720, 
          Fat: 38, 
          Carb: 50, 
          Protein: 70, 
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
