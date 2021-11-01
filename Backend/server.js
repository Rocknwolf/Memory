
require('dotenv').config();
const database = require("./lib/database.js");
database.init();
const cors = require('cors');
const express = require('express');
const playerRouter = require('./routers/playerRouter');
const gamesRouter = require('./routers/gamesRouter');
const io = require('socket.io');
const { on } = require('nodemon');

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

    connection.on('draw', (cardIndex) => {
        const image = "Ich bin ein Image";
        connection.emit('reveal', {cardIndex: +cardIndex, image});
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