const connectDB = require('./config/db');
const express = require('express');
// Used morgan to logs of server
const morgan = require('morgan');

const app = express();

// Connection of MongoDB
connectDB();

// log for any operation on app like call apis
app.use(morgan('dev'));

// middleware function that is used to parse JSON data sent in the request body. 
// It allows your Express application to handle JSON-encoded data
app.use(express.json());

const validateToken = require('./middleware/validateToken');
const usersRouter = require('./feature/Users/user.route');
app.use('/users', usersRouter);

const userInfoRoute = require('./feature/Authenticate/auth.route');
app.use('/usersinfo', validateToken, userInfoRoute);

module.exports = app;