var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Singers name' });
});

router.get('/jeonjungkook', function(req, res, next) {
  res.render('jeonjungkook');
});

router.get('/kimtaehyung', function(req, res, next) {
  res.render('kimtaehyung');
});

router.get('/nimratkhaira', function(req, res, next) {
  res.render('nimratkhaira');
});

router.get('/arijitsingh', function(req, res, next) {
  res.render('arijitsingh');
});

module.exports = router;
