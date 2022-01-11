const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
    user: 'bf7ea32b964f6e',
    password: 'fcff59b2',
    database: 'heroku_ddc5431a75b24f4'
})

setInterval(function () {
    conexao.query('SELECT 1');
}, 5000);

module.exports = conexao