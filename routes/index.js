var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
    // res.render('Less/init');
});


/* GET home page. */
router.get('/demo1', function(req, res, next) {
    res.render('demo1');
});
/* GET home page. */
router.get('/demo1/drawCircle', function(req, res, next) {
    res.render('drawCircle');
});

module.exports = router;