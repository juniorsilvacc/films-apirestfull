const express = require('express');
const homeController = require('../controllers/homeController'); 
const filmsController = require('../controllers/filmsController');
const searchController = require('../controllers/searchController');
const selectedController = require('../controllers/selectedController');
const updateController = require('../controllers/updateController');
const deleteController = require('../controllers/deleteController');
const routes = express();

routes.get("/", homeController.home);

routes.get("/filmes", searchController.searchFilmes);
routes.post("/filmes", filmsController.createdFilmes);
routes.get("/filmes/:id", selectedController.selectedFilmes);
routes.put("/filmes/:id", updateController.updateFilmes);
routes.delete("/filmes/:id", deleteController.deleteFilmes);

module.exports = routes; 