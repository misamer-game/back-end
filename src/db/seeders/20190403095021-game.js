'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        user_id: 1,
        game_type_id: 1,
        score: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        game_type_id: 2,
        score: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        game_type_id: 3,
        score: 50,
        created_at: new Date(),
        updated_at: new Date(),
      },


    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("games", null, {});
  }
};
