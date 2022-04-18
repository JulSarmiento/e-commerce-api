// import Express
const express = require('express');
const app = express();

// import the routes
const routes = require('../routes');

// Data Parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// product`s routes
app.use('/api', routes);

// Port
const PATH = process.env.PORT || 8080

// setting the listen port
const server = app.listen(PATH, () => {
  console.log(`El servidor HTTP en el puerto ${PATH} funcionando correctamente.`);
});

server.on('error', error => console.log(`Error en el servidor ${error}.`));