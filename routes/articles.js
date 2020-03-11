const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.query.id) {
    next()
  }
  res.send('all articles')
});

router.get('/', (req, res, next) => {
  res.send('One Article')
})


router.post('/', (req, res, next) => {
  res.send('Post Ok')
});

module.exports = router;
