var mongoose = require('mongoose');
var router = require('express').Router();
var actor = mongoose.model('actor');

var ObjectId = mongoose.Types.ObjectId;

router.get('/', (req, res, next) => {
    actor.find({})
    .then(actors => {
        if(!actor){return res.sendStatus(401);}
        return res.json({'actors': actors})
    })
    .catch(next);
});

module.exports=router;