const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    port: 3306,
    user: 'b6c96bad485f13',
    password: '2ff13bf7',
    database: 'heroku_51b842185d16c1c'
})

module.exports = conexao