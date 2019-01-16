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

router.post('/', (req, res, next)=>{
    let ac = new actor({
        name: req.body.name,
        nationality: req.body.nationality
    });
    res.send("name:"+req.body.name+ '  ' + "nationality:"+req.body.nationality);
    ac.save()
        .then(doc=>{
            console.log(doc)
        })
    .catch(err=>{
        console.log(err)
    })
});

module.exports=router;