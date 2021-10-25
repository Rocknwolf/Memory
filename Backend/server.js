
require('dotenv').config();
const database = require("./lib/database.js");
database.init();
const cors = require('cors');
const express = require('express');
const playerRouter = require('./routers/playerRouter');
const gamesRouter = require('./routers/gamesRouter');

const app = express();

app.listen(process.env.PORT, () => 
console.log(`server listening on port ${process.env.PORT}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/players", playerRouter);
app.use("/games", gamesRouter);

