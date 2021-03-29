const mongoose = require('mongoose');
const Films = require('../models/films');

mongoose.connect('mongodb://localhost:27017/apirest', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
  console.log('Connection was successfully made!');
}).on('error', () => {
  console.log('Connection error');
});

module.exports = mongoose;