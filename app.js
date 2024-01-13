const connectDB = require('./config/db');
const express = require('express');
// Used morgan to logs of server
const morgan = require('morgan');

const app = express();

connectDB();
app.use(morgan('dev'));

const usersRouter = require('./feature/Users/user.route');
app.use('/users', usersRouter);

module.exports = app;