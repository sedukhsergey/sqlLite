const express = require('express');
const router = express.Router();
const Article = require('../models/Article').Article;

router.get('/', (req, res, next) => {
  if (req.query.id) {
    next();
    return;
  }
  Article.all((err, data) => {
    if (err) res.send(err);
    res.send(data);
  })
});

router.get('/', (req, res, next) => {
  // req.query.id
  res.send('One Article');
});

router.post('/', (req, res, next) => {
  if (req.query.id) {
    console.log('req.body.title', req.body.title);
  }
  res.send('Post Ok');
});

module.exports = router;
