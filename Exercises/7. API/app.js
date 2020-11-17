const express = require('express');

const app = express();

const userRouter = require('./route/userRoute');

app.use(express.json()); // body parser

app.use('/api/users', userRouter);

module.exports = app;
