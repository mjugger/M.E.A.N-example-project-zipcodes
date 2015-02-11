var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/partials/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  res.render('../views/partials/'+name, { title: 'test partial' });
});

module.exports = router;
