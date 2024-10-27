const express = require('express');
require('dotenv').config();

// CONFIGURACION DE LA BASE DE DATOS
require('./database/dbconfig').dbConnection();

// APP DE EXPRESS
const app = express();

// LECTURA Y PARSEO DEL BODY (permite la recepción de POST,PUT, DELETE,etc..)
app.use( express.json() );

// PUERTO DE CONEXION
const port = process.env.PORT;

// SERVIDOR DE SOCKETS
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');

// MIS RUTAS
app.use( '/api/users', require('./routes/login.routes.js') );
app.use( '/notificacion', require('./routes/webhook.routes.js'));

// CORREMOS EL SERVIDOR
server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log('Servidor Nodejs '+ port + ' iniciada ...')
});