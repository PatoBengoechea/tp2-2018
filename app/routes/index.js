var router=require('express').Router();

router.use('/routes/movie', require('./movie'));

module.exports=router;