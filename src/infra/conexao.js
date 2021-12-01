const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root2',
    password: '',
    database: 'pubapi'
})

module.exports = conexao