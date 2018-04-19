var express = require('express');
var router = express.Router();

/* Get Node Page. */
router.get('/', function(res, req, next) {
    res.render('Node/');
});

module.exports = router;