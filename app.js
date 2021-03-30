const express = require('express');
const app = express();

const routes = require('./router/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(4040, (req, res) => {
  console.log("API server running");
})