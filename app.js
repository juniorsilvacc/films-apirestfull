const express = require('express');
const app = express();

const routes = require('./router/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB = {
  films: [
    {
      id: 1,
      title: "Liga da Justiça de Zack Snyder",
      director: "Zack Snyder",
      year: 2021,
    },
    {
      id: 2,
      title: "Legado Explosivo",
      director: "Mark Williams",
      year: 2020,
    },
    {
      id: 3,
      title: "Destruição Final: O Último Refúgio",
      director: "Ric Roman Waugh",
      year: 2020,
    },
  ]
}

app.use(routes);

app.listen(4040, (req, res) => {
  console.log("API server running");
})