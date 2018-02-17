var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
    going: 'well!'
  };

  res.status(200).json(data);
});

module.exports = router;
