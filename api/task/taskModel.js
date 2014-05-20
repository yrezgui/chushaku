var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    default: ''
  },
  done: {
    type: Boolean,
    default: false
  }
}, {strict: true});

module.exports = mongoose.model('Task', TaskSchema);