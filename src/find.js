mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movie');
mongoose.set('debug', true);

require('./models/movie');

var Movie = mongoose.model('movie');

Movie.find({})
	.function(movies){
		movies.forEach(mo => console.log(mo));
	})
