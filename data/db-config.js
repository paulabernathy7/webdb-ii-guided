const knex = require("knex");

const config = require("../knexfile");

const db = knex(config.development);

//traditionally should be in the root of the repo

module.exports = db;
