const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'LivEasy API Documentation',
    description: 'This is the API documentation about LivEasy-BackEnd',
  },
  host: 'localhost:4000',
  schemes: ['http'],
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = ['./src/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);