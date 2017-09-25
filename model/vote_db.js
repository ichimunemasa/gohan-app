var mysqlModel = require('mysql');

// ローカル環境
var connection = mysqlModel.createConnection({
    host     : process.env.DB_HOST || 'localhost',
    user     :  process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || '',
    database : process.env.DB_NAME || 'vote_app'
});

module.exports = connection;
