const mongoose = require("mongoose");

const SizeSchema = mongoose.Schema({
	x: {
		type: Number,
		required: true,
	},
	y: {
		type: Number,
		required: true,
	}
}, { _id: false, versionKey: false });

const GameSchema = mongoose.Schema({
	playerId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Player",
	},
	opponentId: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: "Player",
	},
	size: SizeSchema,
	cardState: {
		type: Array,
	}
}, { versionKey: false });

const Game = mongoose.model("Game", GameSchema);

async function create ({ playerId, size }) {
	const cardState = Array(size.x * size.y)
		.fill("A")
		.map((card, index) => Math.floor(index / 2));
	
	const game = new Game({
		cardState,
		playerId,
		size,
	});

	return await game.save();
}
async function read (id) {
    return await Game.findById(id).populate("playerId").populate("opponentId");
}
async function update (id, opponentId) {
	const game = await Game.findById(id);
	if (!game) throw new Error("game_not_found");
	game.opponentId = opponentId;
	return await game.save();
}

module.exports = {
	create,
    read,
    update,
};