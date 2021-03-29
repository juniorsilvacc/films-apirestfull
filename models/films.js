const mongoose = require('../database/connection');
const Schema = mongoose.Schema; 

const FilmsSchema = Schema({
  name: {
    type: String, 
  },
  director: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const Filmes = mongoose.model('Filmes', FilmsSchema);

module.exports = Filmes;
