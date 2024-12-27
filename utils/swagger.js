const swaggerJsDoc = require('swagger-jsdoc');

const serverUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:5000';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ride Management API',
            version: '1.0.0',
            description: 'API documentation for the Ride Management system',
        },
        servers: [
            {
                url: serverUrl,
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
