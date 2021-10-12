const express = require ('express');

const gamesController = require ('../controllers/gamesController.js');

const router = express.Router();

router.post('/', gamesController.create);
router.get('/:id', gamesController.read);
router.patch('/:id', gamesController.update);

module.exports = router;