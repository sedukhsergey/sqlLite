const express = require('express');
const router = express.Router();

const Tracks = require('../models/Tracks');

router.get('/', (req, res, next) => {
  if (req.query.id) {
    next();
    return;
  }
  res.send('Ok')
})

module.exports = router;
