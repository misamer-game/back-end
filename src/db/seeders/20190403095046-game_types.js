'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('game_types', [
      {
        game_type: "easy",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        game_type: "mid",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        game_type: "hard",
        created_at: new Date(),
        updated_at: new Date(),
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("game_types", null, {});

  }
};
