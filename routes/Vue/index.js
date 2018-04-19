var express = require('express');
var router = express.Router();

/* Get Vue Page. */
router.get('/', function(req, res, next) {
    res.render('Vue/demo_1');
});

router.get('/result_1', function(req, res, next) {
    res.render('Vue/echarts-map');
});

module.exports = router;