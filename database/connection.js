const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apirest', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
  console.log('Connection was successfully made!');
}).on('error', () => {
  console.log('Connection error');
});

module.exports = mongoose;