const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.all((err, data) => {
    if (err) {
      next(err);
      return;
    }
    res.send(data);
  })
});

router.post('/', (req, res, next) => {
  Users.create(req.body, (err, data) => {
    if (err) {
      next(err);
      return;
    }
    res.send('Ok');
  })
});

module.exports = router;
