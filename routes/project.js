const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/:id', function (req, res, next) {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  const templateData = { project };
  if ( project ) {
    res.render('project', templateData);
  } else {
    next();
  }

});

module.exports = router;