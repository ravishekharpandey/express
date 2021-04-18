var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/getData", function (req, res) {
  res.send("user data will be sent here");
});
module.exports = router;
