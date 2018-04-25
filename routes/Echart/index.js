var express = require('express');
var router = express.Router();

/* Get Echart Page. */
router.get('/', function(req, res, next) {
    res.render('Echart/layout_1');
});

router.get('/layout_1', function(req, res, next) {
    res.render('Echart/layout_1');
});

router.get('/markLine', function(req, res, next) {
    res.render('Echart/markLine');
});

module.exports = router;