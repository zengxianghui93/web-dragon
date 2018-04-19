var express = require('express');
var router = express.Router();

/* Get Css Page. */
router.get('/', function(req, res, next) {
    res.render('Css/global-setting.html');
});

module.exports = router;