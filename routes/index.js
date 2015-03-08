'use strict';

var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
  res.render('maintenance', {project: 'Pupil Aspire'});
});

module.exports = router;
