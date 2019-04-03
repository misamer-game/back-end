'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    score: DataTypes.INTEGER
  }, { tableName: "games" });
  Game.associate = function (models) {
    Game.belongsTo(models.Game_type, {
      foreignKey: "game_type_id",
    });
    Game.belongsTo(models.User, {
      foreignKey: "user_id",
      field: "user_id"
    });
  };
  return Game;
};