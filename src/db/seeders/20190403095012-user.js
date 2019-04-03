'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "sara@g.com",
          hashed_password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "majd@g.com",
          hashed_password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "rawan@g.com",
          hashed_password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
