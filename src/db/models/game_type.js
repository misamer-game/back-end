'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game_type = sequelize.define('Game_type', {
    game_type: DataTypes.STRING
  }, { tableName: "game_types" });
  Game_type.associate = function (models) {
    Game_type.hasMany(models.Game, {
      foreignKey: "game_type_id",
    });
  };
  return Game_type;
};