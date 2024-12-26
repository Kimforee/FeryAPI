const express = require('express');
const { listRides, getRideDetails } = require('../controllers/rideController');

const router = express.Router();

// GET /api/rides
router.get('/', listRides);

// GET /api/rides/:id
router.get('/:id', getRideDetails);


module.exports = router;
