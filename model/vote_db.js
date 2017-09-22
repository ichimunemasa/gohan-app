var mysqlModel = require('mysql');

var connection = mysqlModel.createConnection({
    host     : process.env.DB_HOST || 'localhost',
    user     :  process.env.DB_USER || 'root',
    database : process.env.DB_NAME || 'vote_app'
});

module.exports = connection;
