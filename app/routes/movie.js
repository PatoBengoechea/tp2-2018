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

router.get('/:id', (req, res, next) => {

    let id = req.params.id
    movie.findById(id)
      .populate('actors')
      .then(movies =>{
          if(!movies){ return res.sendStatus(401); }
          return res.json({'movies': movies})
      })
      .catch(next);
      
  });
router.post('/', (req, res, next) => {
    let name=req.body.name;
    let genre=req.body.genre;
    let year=req.body.year;
    res.send("name:"+name+ ' ' + "genre:"+genre + ' '+ "year:"+year);
    let mo = new movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        img_path: req.body.img_path
    });

    mo.save()
        .then(doc => {
            console.log(doc)
        })
    .catch(err => {
        console.log(err)
    });

    next();
});


module.exports=router;