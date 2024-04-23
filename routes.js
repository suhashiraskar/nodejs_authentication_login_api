// routes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    const newUser = { username, email, password: hash };
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          res.status(400).json({ error: 'Username or email already exists' });
        } else {
          res.status(500).json({ error: 'Internal Server Error' });
        }
        return;
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', username, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }

      res.json({ message: 'Login successful' });
      
    });
  });
});

module.exports = router;
