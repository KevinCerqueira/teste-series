const { json } = require("body-parser");
const { Request, Response } = require("express");
const knex = require("../database/connection");

class SerieController {
  async get(request, response) {
    const series = await knex("serie").orderBy("idserie");
    return response.json(series);
  }

  async create(request, response) {
    const {
      nomeserie,
      anolancamento,
      numtemporadas,
      sinopse,
      categoria,
      status,
    } = request.body;

    const trx = await knex.transaction();

    const nova_serie = {
      nomeserie,
      anolancamento,
      numtemporadas,
      sinopse,
      categoria,
      status,
    };
    
    const res_serie = await trx("serie").insert(nova_serie);
    const idserie = res_serie[0];

    await trx.commit();

    return response.json({
      id: idserie,
      ...nova_serie,
    });
  }
  async delete(request, response) {
    const { idserie } = request.body;
    const res = await knex("serie").where("idserie", idserie).del();
    return response.json(res);
  }
  async update(request, response) {
    const {
      idserie,
      nomeserie,
      anolancamento,
      numtemporadas,
      sinopse,
      categoria,
      status,
    } = request.body;

    const serie = {
      nomeserie,
      anolancamento,
      numtemporadas,
      sinopse,
      categoria,
      status,
    };
    console.log(serie, idserie);
    const res = await knex("serie").where("idserie", idserie).update(serie);
    return response.json(res);
  }
  async updateStatus(request, response) {
    const { idserie, status } = request.body;
    const res = await knex("serie").where("idserie", idserie).update({
      status: status,
    });
    return response.json(res);
  }
}

module.exports = SerieController;
