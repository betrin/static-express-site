const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;