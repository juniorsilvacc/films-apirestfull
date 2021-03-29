const express = require('express');
const homeController = require('../controllers/homeController'); 
const filmsController = require('../controllers/filmsController');
const routes = express();

routes.get("/", homeController.home);

routes.post("/filmes", filmsController.films);

module.exports = routes; 