const express = require ('express');

const gamesController = require ('../controllers/gamesController.js');

const router = express.Router();

router.post('/games', gamesController /*.Function*/);
router.get('/games/:id', gamesController /*.Function*/);
router.patch('/games/:id', gamesController /*.Function*/);

module.exports = (playerRouter);