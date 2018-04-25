var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('Bootstrap/layout_1');
});

router.get('/layout_1', function(req, res, next) {
    res.render('Bootstrap/layout_1');
});

router.get('/iconinput', function(req, res, next) {
    res.render('Bootstrap/iconinput');
});

module.exports = router;