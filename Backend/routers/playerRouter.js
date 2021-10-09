const express = require ('express');

const playerController = require ('../controllers/playerController.js');

const router = express.Router();

router.post('/players', playerController /*.Function*/);
router.get('/players/:id', playerController /*.Function*/);

module.exports = (playerRouter);
