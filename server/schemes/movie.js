const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const moment = require('moment');

//Variables to create bd schemas
let Schema = mongoose.Schema;
// let date = { yerar: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }

const movieSchema = new Schema({
    _id: { type: String, required: [true, 'You must enter the id.'] },
    title: { type: String, unique: true, required: [true, 'You must enter the title'] },
    year: { type: String },
    genere: { type: String },
    director: { type: String },
    actors: { type: String },
    country: { type: String },
    language: { type: String },
    poster: { type: String },
    runtime: { type: String },
    rated: { type: String },
    ratings: { type: [Object] }
});

movieSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

module.exports = mongoose.model('Movie', movieSchema);