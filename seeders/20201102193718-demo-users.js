'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Austin", 
          username: "Abenc17", 
          password: "Fishbone",
          weight: 240,
          age: 24,
          goal: "Muscle Gain", 
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          name: "Larry", 
          username: "LarryLobster", 
          password: "Gainz",
          weight: 400,
          age: 45,
          goal: "Weight Loss", 
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
