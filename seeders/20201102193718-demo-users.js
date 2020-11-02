'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          Name: "Austin", 
          Username: "Abenc17", 
          Password: "Fishbone",
          Weight: 240,
          Age: 24,
          Goal: "Muscle Gain", 
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
          Name: "Larry", 
          Username: "LarryLobster", 
          Password: "Gainz",
          Weight: 400,
          Age: 45,
          Goal: "Weight Loss", 
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
