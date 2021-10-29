const GameModel = require('../models/gameModel.js');
const Player = require('../models/playerModel.js');

//CREATE/POST
const create = async (req, res) => {
    try {
        const newGame = await GameModel.create({
            playerId: req.body.playerId,
            size: {
                x:req.body.size.x, 
                y:req.body.size.y
            }
        });
        res.status(201).json(newGame._id);
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") return res.status(400).send();
        return res.status(500).send();
    }
}

//READ/GET
const read = async (req, res) => {
    try {
        const newGame = await GameModel.read(req.params.id);
        res.status(200).json(newGame._id);
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") return res.status(400).send();
        return res.status(500).send();
    }
}

//UPDATE/PATCH
const update = (req, res) => {
    res.status(204).send()
}

module.exports = {create, read, update};
