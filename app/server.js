const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');

var app = express();
app.use(cors());

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/cinema', {useNewUrlParser:true});

require('./models/movie.js');
require('./models/actor.js');


app.use(require('./routes'));

var router=express.Router();


app.use(router);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
