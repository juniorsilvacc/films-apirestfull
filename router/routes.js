const express = require('express');
const homeController = require('../controllers/homeController'); 
const filmsController = require('../controllers/filmsController');
const searchController = require('../controllers/searchController');
const selectedController = require('../controllers/selectedController');
const routes = express();

routes.get("/", homeController.home);

routes.get("/filmes", searchController.searchFilmes);
routes.post("/filmes", filmsController.createdFilmes);

routes.get("/filmes/:id", selectedController.selectedFilmes);

module.exports = routes; 