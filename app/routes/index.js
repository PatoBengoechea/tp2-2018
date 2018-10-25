var router=require('express').Router();

router.use('/api/movie', require('./movie'));

module.exports=router;