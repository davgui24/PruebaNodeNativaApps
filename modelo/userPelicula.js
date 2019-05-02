const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');


//Variables para crear esquemas de la bd
let Schema = mongoose.Schema;



const userSchema = new Schema({
    nombre: { type: String },
    apellido: { type: String },
    pelicula: {
        type: Schema.Types.ObjectId,
        ref: "pelicula",
    }
});

// personaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('user', userSchema);