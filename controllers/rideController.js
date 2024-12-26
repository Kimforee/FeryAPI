const rides = require('../utils/mockRides');

/**
 * Returns a list of rides.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const listRides = (req, res) => {
    try {
        res.status(200).json({
            message: 'Rides fetched successfully.',
            rides,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
const getRideDetails = (req, res) => {
    const { id } = req.params;

    try {
        // Find the ride by ID
        const ride = rides.find((ride) => ride.id === id);

        if (!ride) {
            return res.status(404).json({ message: 'Ride not found.' });
        }

        res.status(200).json({
            message: 'Ride details fetched successfully.',
            ride,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

module.exports = { listRides, getRideDetails };
