const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  username: String,
  contact: Number,
  email: String,
});

const UserItem = mongoose.model('User', userSchema);

module.exports = UserItem;