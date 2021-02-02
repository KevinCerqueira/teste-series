const knex = require('knex');

const connection = knex({
    client: 'mysql',
    connection: {
        host: 'us-cdbr-east-03.cleardb.com',
        user: 'bb3ed9ae9d95ec',
        password: '695eee19',
        database: 'heroku_6b813a9a5dace8a'
    },
    useNullAsDefault: true,
});

module.exports = connection;