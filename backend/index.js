const express = require('express');
const cors = require('cors');
const app = express();

// leer archivo de configuracion
require('dotenv').config();

// crear base si no existe
require("./base-orm/sqlite-init"); 

// para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());

// Configuración de rutas
<<<<<<< HEAD
const routes = require('./routes/envios');
app.use('/', routes);

const routes2 = require('./routes/usuarios');
=======
const routes = require('./routes/articulos');
app.use('/', routes);

const routes2 = require('./routes/vendedores');
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
app.use('/', routes2);

// Inicio del servidor
const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;

