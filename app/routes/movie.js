var mongoose = require('mongoose');
var router = require('express').Router();
var movie = mongoose.model('movie');

var ObjectId = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {
    movie.find({})
    .then(movies => {
        if(!movies){return res.sendStatus(401);}
        return res.json({'movies': movies})
    })
    .catch(next);
});

module.exports=router;