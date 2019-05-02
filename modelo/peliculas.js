const mongoose = require('mongoose');


//Variables para crear esquemas de la bd
let Schema = mongoose.Schema;



const peliculaSchema = new Schema({
    titulo: { type: String },
    year: { type: Number },
    genero: { type: String },
    director: { type: String },
    actor: { type: String },
    lenguaje: { type: String },
    pais: { type: String },
});



module.exports = mongoose.model('Pelicula', peliculaSchema);