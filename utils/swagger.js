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
                url: 'https://fery-nx4xoudi9-kimforees-projects.vercel.app',
                url: 'https://fery-api.vercel.app'
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
