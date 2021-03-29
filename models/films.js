const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const FilmsSchema = Schema({
  title: {
    type: String, 
  },
  director: {
    type: String,
  },
  year: {
    type: Number,
  },
});

module.exports = mongoose.model('Films', FilmsSchema);