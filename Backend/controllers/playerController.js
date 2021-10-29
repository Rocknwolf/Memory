const PlayerModel = require('../models/playerModel.js');
//CREATE/POST
const create = async (req, res) => {
    try {
        const newPlayer = await PlayerModel.create({
            name: req.body.name,
            avatar: req.body.avatar,
        });
        res.status(201).json({ id: newPlayer._id });
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") return res.status(400).send();
        return res.status(500).send();
    }
}

//READ/GET
const read = async (req, res) => {
    try {
        const player = await PlayerModel.read(req.params.id);
        res.status(200).json({name: player.name, avatar: player.avatar});
    } catch (error) {
        console.log(error);
        if (error.name === "ValidationError") return res.status(400).send();
        return res.status(500).send();
    }
}

module.exports = {create, read};