const express = require('express');
const mainRouter = express.Router();
const todoRouter = require('./todo.router');
const userRouter = require('./user.router');


mainRouter.use('/todo', todoRouter);
mainRouter.use('/user', userRouter);

module.exports = mainRouter;