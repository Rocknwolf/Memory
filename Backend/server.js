
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const playerRouter = require('./routers/playerRouter');
const gamesRouter = require('./routers/gamesRouter');

const app = express();
app.listen(process.env.PORT, () => 
console.log(`server listening on port ${process.env.PORT}`));

app.use(cors());

app.use("/players", playerRouter);
app.use("/games", gamesRouter);

