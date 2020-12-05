const express = require('express');
const logger = require('morgan');

// Generic application setup
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Load routes into variables
const index = require('./routes/index');
const calc = require('./routes/calc');
const users = require('./routes/users');

// Routes
app.use('/was', index);
app.use('/calc', calc);
app.use('/users', users);

// http://localhost:3000/was/noch
// --------------------^           damit überhaupt Verbindung hergestellt
//                      ^--^       Präfix aus app.js
//                          ^----  Route in routes/index.js


module.exports = app;
