
require('dotenv').config();
const database = require("./lib/database.js");
database.init();
const cors = require('cors');
const express = require('express');
const playerRouter = require('./routers/playerRouter');
const gamesRouter = require('./routers/gamesRouter');
const io = require('socket.io');
const {getCardByIndex, updateTurnState} = require('./models/gameModel.js');

const app = express();

const server = app.listen(process.env.PORT, () => 
console.log(`server listening on port ${process.env.PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/players", playerRouter);
app.use("/games", gamesRouter);

const socket = io(server);

socket.on('connection', (connection) => {
    connection.emit('hello', "world");

    // end turn bedingungen und Pärchen oder nich?

    connection.on('draw', async (cardIndex) => {
        const card = await getCardByIndex(cardIndex);

        await updateTurnState(cardIndex, card);
        connection.emit('reveal', {cardIndex: +cardIndex, card: card});
        console.log(cardIndex);
        
        connection.emit('endTurn', {
            nextPlayer: "playerOne", 
            score:{
                playerIdOne: 1, 
                playerIdTwo: 2,
            }, 
            cardState: [1,2,3],
        });
    })

    console.log("client connected");
})