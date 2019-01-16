//var mongoose = require('mongoose');
const mongoose = require('mongoose');

var movieSchema= new mongoose.Schema({
	name: {type: String, required: true},
	year: {type: Number, required: true},
	genre: {type: String, required: true},
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actor'}]
}, {collection:'movie'});

mongoose.model('movie', movieSchema);
