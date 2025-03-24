const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', function (req, res, next) {
  const templateData = { projects };
  res.render('index', templateData);
});

module.exports = router;