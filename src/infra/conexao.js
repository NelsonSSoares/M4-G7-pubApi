const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    port: 3306,
    user: 'b4f1479ea5daa2',
    password: '0424ad42',
    database: 'heroku_4432e87522d6f4f'
})

module.exports = conexao