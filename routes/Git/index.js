var express = require('express');
var router = express.Router();

/* Get Git Page. */
router.get('/', function(req, res, next) {
    res.render('Git/git');
});

module.exports = router;