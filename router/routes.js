const express = require('express');
const filmsController = require('../controllers/films.Controller');
const routes = express();

routes.get("/films", filmsController.films);

module.exports = routes; 