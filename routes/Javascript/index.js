var express = require('express');
var router = express.Router();

/* Get Javascrips Page. */
router.get('/', function(req, res, next) {
    res.render('Javascript/demo_1');
});

router.get('/download', function(req, res, next) {
    res.render('Javascript/download');
});

module.exports = router;