const knex = require('knex');
require('dotenv/config');

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    useNullAsDefault: true,
});

module.exports = connection;