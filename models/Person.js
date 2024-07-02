const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  work: {
    type: String,
    enum: ['chef', 'waiter', 'manager'],
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

const person = mongoose.model('Person', personSchema);
module.exports = person;