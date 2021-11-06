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
	},
	turnState: {
		type: Array,
	},
}, { versionKey: false });

const Game = mongoose.model("Game", GameSchema);

async function create ({ playerId, size }) {
	const cardDeck = Array(size.x * size.y)
		.fill("A")
		.map((card, index) => Math.floor(index / 2));
		
	let cardState = cardDeck;
	for (let index = 0; index < 100; index++) {
		cardState = cardState.sort((a,b) => Math.random() - 0.5);
	}	

	const game = new Game({
		cardState,
		playerId,
		size,
	});

	return await game.save();
}
async function updateTurnState(index, card){
	const id = "618697f8d47ab1447d01a426";
	const turnState = {index: index, card: card};
	const game = await Game.findById(id);
	if (!game) throw new Error("game_not_found");

	if(game.turnState.find((turn) => turn.index === index)) return;
	game.turnState = [...game.turnState, turnState];
	if(game.turnState.length >= 2) {
		if(game.turnState[0].card === game.turnState[1].card){
			console.log("yeah");
		}
		game.turnState = [];
	};
	console.log(game.turnState);
	return await game.save();
}
async function getCardByIndex(index){
	const id = "618697f8d47ab1447d01a426";
	return (await Game.findById(id)).cardState[index];
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
	getCardByIndex,
	updateTurnState,
};