const router = require('express').Router();

router.get('/', function(req, res){
    res.json({
        status: 'The API is working',
        message: 'Welcome, the router is working!'
    });
});

module.exports = router;