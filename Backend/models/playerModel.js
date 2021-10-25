const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		required: true,
	},
}, { versionKey: false });

const Player = mongoose.model("Player", PlayerSchema);

async function create ({ name, avatar }) {
	const player = new Player({
		name,
		avatar,
	});

	return await player.save();
}
async function read (id) {
    return await Player.findById(id);
}



module.exports = {
	create,
    read,
};