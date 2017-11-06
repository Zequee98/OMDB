const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');
var path = require('path');

//function authenticate
function isAuthenticate (req, res, next) {
  if(req.isAuthenticate()){
    next()
  } else {
    res.send('No estas logggiado')
  }
}

// register

router.post('/register', function(req, res, next){
  res.sendFile(path.join(__dirname, '../public', 'register.html'))
});


module.exports = router;
