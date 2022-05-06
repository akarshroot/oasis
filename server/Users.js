const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    phn: Number
  },
  {
    collection: 'Users'
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
