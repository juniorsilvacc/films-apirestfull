const express = require('express');
const homeController = require('../controllers/homeController'); 
const filmsController = require('../controllers/filmsController');
const searchController = require('../controllers/searchController');
const routes = express();

routes.get("/", homeController.home);

routes.get("/filmes", searchController.searchFilmes);
routes.post("/filmes", filmsController.createdFilmes);

module.exports = routes; 