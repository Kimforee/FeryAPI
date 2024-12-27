const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Serve static files for Swagger UI
app.use("/api-docs", express.static(path.join(__dirname, "node_modules/swagger-ui-dist")));

// Middleware for parsing JSON
app.use(express.json());

// Connect to database
connectDB();

// API Endpoints placeholder
app.get('/', (req, res) => {
    res.redirect('/api-docs/');
  });

app.get('/debug-env', (req, res) => {
  res.json({ mongoUri: process.env.MONGO_URI });
});

// Start server
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const rideRoutes = require('./routes/rideRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./utils/swagger');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Use user routes
app.use('/api/users', userRoutes);
// Use ride routes
app.use('/api/rides', rideRoutes);
