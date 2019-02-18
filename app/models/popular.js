// Instanciar mongoose
var mongoose = require('mongoose');

// Crear Schema
var popularSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    adult: {type: Boolean, required: false},
    release_date: {type: String, required: false},
    poster_path: {type: String, required: false},    
    vote_count: {type: Number, required: true},
});

// Diferencia con el de arriba?
/*
var popularSchema = new mongoose.Schema({
    title: string,
    genre: string,
    adult: boolean,
    release_date: string, // o Date
    poster_path: string,    
    vote_count: Number,
});
*/

// Exportar modelo
mongoose.model('popular', popularSchema);
