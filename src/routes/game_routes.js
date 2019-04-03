import express from "express";
import models from "./../db/models";

const Game = models.Game;
const router = express.Router();


// post new game
// post score for easy game
router.post("/game", (req, res) => {
    console.log("qazwsxedc ", req.body.data);
    Game.create(req.body.data)
        .then(game => {
            res.status(201).json({ game: game });
        })
        .catch(e => console.log(e));
});


router.get("/game/highest_easy", (req, res) => {
    Game.findOne({

        where: {
            game_type_id: 1,
        }, include: [{
            model: models.User
        },
        {
            model: models.Game_type
        }],

        order: [["score", "DESC"]]
    })
        .then(gameType => {
            res.status(200).json(gameType.get({ plain: true }))
        })
        .catch(e => console.log(e));

});

router.get("/game/highest_mid", (req, res) => {
    Game.findOne({

        where: {
            game_type_id: 2,
        }, include: [{
            model: models.User
        },
        {
            model: models.Game_type
        }],

        order: [["score", "DESC"]]
    })
        .then(gameType => {
            res.status(200).json(gameType.get({ plain: true }))
        })
        .catch(e => console.log(e));

});

router.get("/game/highest_hard", (req, res) => {
    Game.findOne({

        where: {
            game_type_id: 3,
        }, include: [{
            model: models.User
        },
        {
            model: models.Game_type
        }],

        order: [["score", "DESC"]]
    })
        .then(gameType => {
            res.status(200).json(gameType.get({ plain: true }))
        })
        .catch(e => console.log(e));

});



export default router;
