const connectDB = require('./config/db');
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
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


const usersRouter = require('./feature/Users/user.route');
app.use('/users', usersRouter);

const userInfoRoute = require('./feature/Authenticate/auth.route');
// => below is method to use validateToken as middleware, we can do in route file also as .use() mthod
// const validateToken = require('./middleware/validateToken');
// app.use('/usersinfo', validateToken, userInfoRoute);
app.use('/usersinfo', userInfoRoute);

app.use(errorHandler);

module.exports = app;