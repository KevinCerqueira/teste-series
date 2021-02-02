const { json } = require("body-parser");
const { Request, Response } = require("express");
const knex = require("../database/connection");

class StatusController {
  async get(request, response) {
    const status = await knex("status").orderBy("idstatus");
    return response.json(status);
  }
}

module.exports = StatusController;
