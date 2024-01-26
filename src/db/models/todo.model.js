const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  isCompleted: Boolean,
});

const ToDoItem = mongoose.model('Todo', TodoSchema);

module.exports = ToDoItem;