const conexao = require("../infra/conexao");

class FuncionarioDAO{

    constructor(conexao){
        this.conexao = conexao;
    }

    insert = (newfunc) =>{

        return new Promise((resolve, reject) =>{
            this.conexao.query(``)
        })

        /*
        conexao.query("SELECT * FROM FUNCIONARIOS WHERE email = ?", [email], (err, result) => {
            if(err){
                res.send(err)
            }
            if(result.length == 0){
                bcrypt.hash(senha, saltRouns, (err, hash) => {
                    conexao.query("INSERT INTO FUNCIONARIOS (idfunc , nome, email, senha, idade, sexo, cargo, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [idfunc , nome, email, senha, idade, sexo, cargo, imagem], (err, response) => {
                        if(err){
                            res.send(err)
                        }
                        res.send({msg: 'cadastrado com sucesso'})
                    })
                })

            } else {
                res.send({msg: 'email já existente'})
            }
        })
        */


    }// end insert

    selectAll = () => {

    }

    selectId  = () =>{

    }

    update = () =>{

    }

    delete = () => {

    }

}// end class



module.exports = new FuncionarioDAO(conexao)