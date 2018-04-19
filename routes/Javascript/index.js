var express = require('express');
var router = express.Router();

/* Get Javascrips Page. */
router.get('/', function(req, res, next) {
    res.render('Javascript/');
});

module.exports = router;