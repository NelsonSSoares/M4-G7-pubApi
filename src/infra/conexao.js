const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pubapi'
})

setInterval(function () {
    connection.query('SELECT 1');
}, 5000);

module.exports = conexao