const express = require('express');

const CarController = require('../../controllers/car-controller');

const router = express.Router();

router.post('/car', CarController.create);
router.delete('/car/:id' , CarController.destroy);
router.get('/car/:id', CarController.get);
router.get('/car', CarController.getAll);

module.exports = router;