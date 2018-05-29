const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/databases');

// register
router.post('/register', (req, res, next) => {
  let newUser = new User.User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        code: '1000',
        msg: 'register fail'
      });
    } else {
      res.json({
        code: '0000',
        msg: 'register success'
      });
    }
  })
});

// profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({
    code: '0000',
    msg: 'profile'
  });
})

// auth
router.post('/auth', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err
    if (!user) {
      res.json({
        code: '1000',
        msg: 'User not found'
      }); 
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err
      if (isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // one week
        });
        res.json({
          code: '0000',
          token: 'JWT' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.eamil,
            username: user.username
          }
        });
      } else {
        res.json({
          code: '1000',
          msg: 'Wrong password'
        });
      }
    });
  });
});

module.exports = router;