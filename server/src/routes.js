const { request, response } = require('express');
const express = require('express');
const knex = require("./database/connection");
const SerieController = require('./controllers/SerieController');
const StatusController = require('./controllers/StatusController');

const routes = express.Router();
const serieController = new SerieController();
const statusController = new StatusController();

routes.get('/series/', serieController.get);
routes.post('/series/create', serieController.create);
routes.delete('/series/delete', serieController.delete);
routes.put('/series/update', serieController.update);
routes.get('/status/', statusController.get);

module.exports = routes;