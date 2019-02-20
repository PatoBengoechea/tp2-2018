var mongoose = require('mongoose');
var router = require('express').Router();
var movie = mongoose.model('movie');

var ObjectId = mongoose.Types.ObjectId;

// Traer todas las películas
router.get('/', (req, res, next) => {
    movie.find({})
        .then(movies => {
            if (!movies) { return res.sendStatus(401); }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

// Traer una película
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    movie.find({ "_id": ObjectId(id) })
        .populate('actors')
        .then(movies => {
            if (!movies) { return res.sendStatus(401); }
            return res.json({ 'movies': movies })
        })
        .catch(next);

});

// Update movie
router.post('/', (req, res, next) => {
    let name = req.body.name;
    let genre = req.body.genre;
    let year = req.body.year;

    let mo = new movie({
        name: req.body.name,
        genre: req.body.genre,
        year: req.body.year,
        img_path: req.body.img_path
    });

    mo.save()
        .then(doc => {
            console.log(doc);
            res.send("name:" + name + ' ' + "genre:" + genre + ' ' + "year:" + year);
        })
        .catch(err => {
            console.log(err);
            res.send("Ha ocurrido un error, intentelo de nuevo mas tarde");
        });

    next();
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    movie.findByIdAndRemove(id);
    res.sendStatus(200);
}
);

// Votar una película
router.put('/:id', (req, res, next) => {
    movie.findById(id);
    if (req.body.vote) {
        movie.vote++;
    }
    else {
        movie.vote--;
    }

    movie.save()
        .then(doc => {
            console.log(doc);
            res.send('Voto actualizado');
        })
        .catch(err => {
            console.log(err);
            res.send('Ha ocurrido un error, intentelo de nuevo mas tarde');
        })
});

// Traer populares
router.get('/movie/popular', (req, res, next) => {
    movie.find({ vote: { $gte: 10 } })
        .then(movies => {
            if (!movies) { return res.sendStatus(401); }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

// Traer now-playing
router.get('/movie/now-playing', (req, res, next) => {
    let date2 = new Date();
    date2.month = date2.getMonth() - 1;
    movie.find({ release_date: { $gte: date2 } })
        .then(movies => {
            if (!movies) { return res.sendStatus(401); }
            return res.json({ 'movies': movies })
        })
        .catch(next);
});

// Traer películas de un actor
router.get('/movies/:id_actor', (req, res, next) => {
    let id_actor = req.params.id_actor;
    movie.find({ 'actors': id_actor })
        .populate('actors')
        .then(actorMovies => {
            if(!actorMovies){ return res.sendStatus(401);}
            return res.json({'actorMovies': actorMovies})
        })
        .catch(next);
});

module.exports = router;