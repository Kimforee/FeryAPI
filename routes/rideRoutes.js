const express = require('express');
const { listRides, getRideDetails } = require('../controllers/rideController');

const router = express.Router();

// GET /api/rides
router.get('/', listRides);

// GET /api/rides/:id
router.get('/:id', getRideDetails);

module.exports = router;

/**
 * @swagger
 * /api/rides:
 *   get:
 *     summary: Get a list of rides
 *     tags:
 *       - Rides
 *     responses:
 *       200:
 *         description: List of rides
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 rides:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       distance:
 *                         type: string
 *                       fare:
 *                         type: string
 */

/**
 * @swagger
 * /api/rides/{id}:
 *   get:
 *     summary: Get ride details by ID
 *     tags:
 *       - Rides
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ride details
 *       404:
 *         description: Ride not found
 */
