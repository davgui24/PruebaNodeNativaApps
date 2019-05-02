//1. Requieres
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//2. Inicializar variables
const app = express();



//7 Boby Parser  Resibe los parametros del body y los convierte en un Json
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())



//5. importar rutas
const appRoutes = require('./rutas/app');
const peliculaRoutes = require('./rutas/pelicula');

//6. Ruta
app.use('/', appRoutes);
app.use('/pelicula', peliculaRoutes);





//4. conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/peliculas', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'ONLINE');
});



//3. Escucuchar peticiones
// : \x1b[32m % s\x1b[0m  --> para que la palabra "online" se coloque en verde
app.listen(3000, () => {
    console.log('Express server, puerto 3000: \x1b[32m%s\x1b[0m', ' online');
});