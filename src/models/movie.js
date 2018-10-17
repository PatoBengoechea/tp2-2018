var mongoose = require('mongoose');

var clientSchema= new mongoose.Schema({
	name: {type:String, required: true},
	age: {type:Number, required: true},
	genre: {type: String, required: true}}
}, {timestamps:true});

mongoose.model('movie', movieSchema);
