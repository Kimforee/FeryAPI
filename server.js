const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Connect to database
connectDB();

// API Endpoints placeholder
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
const rideRoutes = require('./routes/rideRoutes');

// Use user routes
app.use('/api/users', userRoutes);
// Use ride routes
app.use('/api/rides', rideRoutes);