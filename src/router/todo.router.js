const express = require('express');
const todoRouter = express.Router();
const {getToDo, createToDo, deleteToDo, updateToDo} = require('../controllers/todo.controller');

todoRouter.get('/get', getToDo);
todoRouter.delete('/delete', deleteToDo);
todoRouter.put('/update', updateToDo);
todoRouter.post('/create', createToDo);


module.exports = todoRouter;