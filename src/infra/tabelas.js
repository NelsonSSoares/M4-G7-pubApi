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
            'preco float(4,2) NOT NULL, '+
            'PRIMARY KEY (idcomida)'+
        '); '/*

        'CREATE TABLE IF NOT EXISTS mentoria'+
        '( '+
            'idmentoria int NOT NULL AUTO_INCREMENT, '+
            'mentorId int NOT NULL, '+
            'mentoradoId int NOT NULL, '+
            'PRIMARY KEY (idmentoria), '+
            'KEY mentorId_idx (mentorId), '+
            'KEY mentoradoId_idx (mentoradoId), '+
            'CONSTRAINT mentoradoId FOREIGN KEY (mentoradoId) REFERENCES mentorado (idmentorado), '+
            'CONSTRAINT mentorId FOREIGN KEY (mentorId) REFERENCES mentor (idmentor) '+
          ');'
        
          */
        
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