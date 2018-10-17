var mongoose = require('mongoose');

var actorSchema= new mongoose.Schema({
	name: {type:String, required: true},
	nationality: {type:Number, required: true}
}, {timestamps:true});

mongoose.model('actor', actorSchema);
