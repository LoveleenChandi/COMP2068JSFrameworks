var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Singers name' });
});

router.get('/Jeon Jung-kook', function(req, res, next) {
  res.render('Jeon Jung-kook');
});

router.get('/ Kim Tae-hyung', function(req, res, next) {
  res.render(' Kim Tae-hyung');
});

router.get('/Nimrat Khaira', function(req, res, next) {
  res.render('Nimrat Khaira');
});

router.get('/Arijit Singh', function(req, res, next) {
  res.render('Arijit Singh');
});

module.exports = router;
