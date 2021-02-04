'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const CONFIG = require('./config/config');
const movies = require('./routes/movies');


// npm start   ===>>>  para produccion
// npm run start:dev   ===>>>  para desarrollo

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});


// ******************** USO DE RUTAS
app.use('/', movies);

CONFIG.db();


app.listen(CONFIG.PORT_SERVER, () => {
    console.log('\x1b[34m' + `'Express server, puerto ${CONFIG.PORT_SERVER}`);
})

