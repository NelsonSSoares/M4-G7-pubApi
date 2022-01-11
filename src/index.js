const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        const app = customExpress()

        const port = process.env.PORT || 3001
        app.listen(port, () => console.log('servidor rodando na porta 3001'))
    }
})