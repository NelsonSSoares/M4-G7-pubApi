class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelas()
    }

    criarTabelas() {

        const tabelas = ['CREATE TABLE IF NOT EXISTS funcionarios' +
        '( ' +
            'id int NOT NULL AUTO_INCREMENT, ' +
            'nome varchar(45) NOT NULL, ' +
            'cargo varchar(200) NOT NULL, ' +
            'cpf varchar(11) NOT NULL, ' +
            'email varchar(45) NOT NULL, ' +
            'senha varchar(200) NOT NULL, ' +
            'PRIMARY KEY (id)' +
        '); ',

        'CREATE TABLE IF NOT EXISTS comidas' +
        ' ('+
            'id int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(45) NOT NULL, '+
            'descricao varchar(200),' +
            'preco float(4,2) NOT NULL, '+
            'imagem text, ' +
            'PRIMARY KEY (id)'+
        '); ',

        'CREATE TABLE IF NOT EXISTS musicas'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(200) NOT NULL, '+
            'artista varchar(200) NOT NULL, '+
            'album varchar(200) NOT NULL, '+
            'PRIMARY KEY (id)'+
          ');',

        'CREATE TABLE IF NOT EXISTS comandas'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'numero varchar(45) NOT NULL, '+
            'idFuncionario int, '+
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_comandasFuncionarios FOREIGN KEY (idFuncionario)' +
            'REFERENCES funcionarios(id)' +
          ');',

          'CREATE TABLE IF NOT EXISTS bebidas'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(45) NOT NULL, '+
            'tipo varchar(45) NOT NULL, '+
            'marca varchar(45) NOT NULL, '+
            'preco float(4,2) NOT NULL, '+
            'imagem text, ' +
            'PRIMARY KEY (id) '+
          ');',

          'CREATE TABLE IF NOT EXISTS comandas_bebidas'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'idComanda int NOT NULL, '+
            'idBebida int NOT NULL, '+
            'quantidade int, ' +
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_comandasBebidas_comandas FOREIGN KEY (idComanda)' +
            'REFERENCES comandas(id) ON DELETE CASCADE, ' +
            'CONSTRAINT FK_comandasBebidas FOREIGN KEY (idBebida)' +
            'REFERENCES bebidas(id) ON DELETE CASCADE' +
          ');',

          'CREATE TABLE IF NOT EXISTS comandas_comidas'+
        '( '+
            'id int NOT NULL AUTO_INCREMENT, '+
            'idComanda int NOT NULL, '+
            'idComida int NOT NULL, '+
            'quantidade int,' +
            'PRIMARY KEY (id), '+
            'CONSTRAINT FK_comandasComidas_comandas FOREIGN KEY (idComanda)' +
            'REFERENCES comandas(id) ON DELETE CASCADE, ' +
            'CONSTRAINT FK_comandasComidas FOREIGN KEY (idComida)' +
            'REFERENCES comidas(id) ON DELETE CASCADE' +
          ');'
        ]

        tabelas.forEach(sql =>{
            this.conexao.query(sql, (erro) => {
                if(erro){
                    console.log(erro)
                } else {
                    console.log('Tabela criada com sucesso')
                }
            })
        })

    }
}


module.exports = new Tabelas