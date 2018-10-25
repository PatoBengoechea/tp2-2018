//var mongoose = require('mongoose');
const mongoose = require('mongoose');

var movieSchema= new mongoose.Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
	genre: {type: String, required: true},
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actor'}]
});

mongoose.model('movie', movieSchema);
