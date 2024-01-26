const express = require('express');
const userRouter = express.Router();
const {getUser, createUser, deleteUser, updateUser} = require('../controllers/user.controller');


userRouter.get('/get', getUser);
userRouter.delete('/delete', deleteUser);
userRouter.put('/update', updateUser);
userRouter.post('/create', createUser);


module.exports = userRouter;