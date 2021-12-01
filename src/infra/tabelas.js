class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelas()
    }

    criarTabelas() {

        const tabelas = ['CREATE TABLE IF NOT EXISTS FUNCIONARIOS' +
        '( ' +
            'idfunc int NOT NULL AUTO_INCREMENT, ' +
            'nome varchar(45) NOT NULL, ' +
            'email varchar(45) NOT NULL, ' +
            'senha varchar(200) NOT NULL, ' +
            'idade int NOT NULL, ' +
            'sexo varchar(1) NOT NULL, ' +
            'cargo varchar(200) NOT NULL, ' +
            'PRIMARY KEY (idfunc)' +
        '); ',
        
        'CREATE TABLE IF NOT EXISTS COMIDAS' +
        ' ('+
            'idcomida int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(45) NOT NULL, '+
            'qnt int NOT NULL, '+
            'preco decimal(10,2) NOT NULL, '+
            'PRIMARY KEY (idcomida)'+
        '); ',

        'CREATE TABLE IF NOT EXISTS MUSICAS'+
        '( '+
            'idmusica int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(200) NOT NULL, '+
            'artista varchar(200) NOT NULL, '+
            'album varchar(200) NOT NULL, '+
            'duracao float(4,2) NOT NULL, '+
            'PRIMARY KEY (idmusica)'+
          ');',

        'CREATE TABLE IF NOT EXISTS ENTRADAS'+
        '( '+
            'identradas int NOT NULL AUTO_INCREMENT, '+
            'nome varchar(45) NOT NULL, '+
            'cpf varchar(11) NOT NULL, '+
            'pedidos varchar(255) NOT NULL, '+
            'PRIMARY KEY (identradas), '+
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