var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api", function(req, res, next) {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
router.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


module.exports = router;
