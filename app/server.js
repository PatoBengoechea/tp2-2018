const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
//const routes = require('./routes/index');
//const routesmovie = require('./routes/movie');

mongoose.connect('mongodb://localhost/cinema');

require('./models/movie.js');
require('./models/actor.js');

var app = express();
app.use(require('./routes'));
app.use(cors());

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());




//app.use(routes);
//app.use(routesmovie);



var router=express.Router();


app.use(router);

app.listen(port, (err) => {
  console.log('We are live on ' + port);
});
