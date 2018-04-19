var express = require('express');
var router = express.Router();

/* Get Openlayers Page. */
router.get('/', function(req, res, next) {
    res.render('Openlayers/demo_1');
});

router.get('/result_1', function(req, res, next) {
    res.render('Openlayers/result_1');
})

module.exports = router;