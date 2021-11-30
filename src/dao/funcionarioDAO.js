const { resolve } = require("path/posix");
const conexao = require("../infra/conexao");

class FuncionarioDAO{

    constructor(conexao){
        this.conexao = conexao;
    }


    loginFuncionario = (email, senha) => {

    }


    selectAllFuncionario = () => {
        return new Promise((resolve, reject) =>{
            this.conexao.query(`SELECT * FROM FUNCIONARIOS`, (error, result)=>{
                if(error){
                    reject("cannot return data from database");
                }else{
                    resolve(result);
                }
            })
        })
    }

    selectIdFuncionario  = (id) =>{
        return new Promise((resolve, reject) =>{
            this.conexao.query(`SELECT * FROM FUNCIONARIOS WHERE idfunc = ?`, id,
            (error,result)=>{
                if(error){
                    reject("ID not found, unknown error occurred during runtime")
                }else{
                    resolve(result)
                }
            })
        })
    }

    insertFuncionario = (newfunc) =>{

        return new Promise((resolve, reject) =>{
            this.conexao.query(`INSERT INTO FUNCIONARIOS (idfunc , nome, email, senha, idade, sexo, cargo, imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
             newfunc.idfunc,
             newfunc.nome, 
             newfunc.email,
             newfunc.senha,
             newfunc.idade,
             newfunc.sexo,
             newfunc.cargo,
             newfunc.imagem,
            (error,result)=>{
                if(error){
                    reject("Error inserting data into database, could be query error or connection error ERROR: " + error)
                }else{
                    resolve("Employee created successfully" + result)
                }
            })
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

    updateFuncionario = (id, funcionario) =>{
        return new Promise((resolve, reject)=>{
            this.conexao.query(`UPDATE FUNCIONARIOS SET nome = ? , email = ?, senha = ? , idade = ?, sexo = ? , cargo = ? , imagem = ? WHERE idfunc =? `,
            funcionario.nome, 
            funcionario.email,
            funcionario.senha,
            funcionario.idade,
            funcionario.sexo,
            funcionario.cargo,
            funcionario.imagem,
            id,
            (error, result) =>{
                if(error){
                    reject("Error ID not found or your data is not valid, ERROR :" + error)
                }else{
                    resolve(result);
                }
            })        
        })
    }

    deleteFuncionario = (id) => {
        return new Promise((resolve, reject) =>{
            this.conexao.query(`DELETE FROM FUNCIONARIOS WHERE idfunc = ?`,id, (error)=>{
                if(error){
                    reject("Incorrect ID or occurried a fatal error occurred during run time, Error: " + error)
                }else{
                    resolve(true)
                }
            })
        })
    }

}// end class



module.exports = new FuncionarioDAO(conexao)