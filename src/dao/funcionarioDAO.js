const bcrypt = require("bcrypt");
const conexao = require("../infra/conexao");
const saltRouns = 10
class FuncionarioDAO {

    constructor() {
        this.conexao = conexao;
    }


    loginFuncionario = (email, senha) => {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM FUNCIONARIOS WHERE email = ? ", email, (err, result) => {
                if (err) {
                    reject("unexpected error: " + err)
                }
                if (result.length > 0) {
                    const idfunc = result[0].idfunc

                    bcrypt.compare(senha, result[0].senha, (erro, result) => {
                        if (result) {
                            resolve({ msg: "Usuario logado com sucesso", id: idfunc })
                        } else {
                            reject({ msg: 'senha incorreta' })
                        }
                    })
                } else {
                    reject({ msg: "email não encontrado" })
                }
            })
        })
    }


    selectAllFuncionario = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM FUNCIONARIOS`, (error, result) => {
                if (error) {
                    reject("Não foi possível listar funcionários");
                } else {
                    resolve(result);
                }
            })
        })
    }

    selectIdFuncionario = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM FUNCIONARIOS WHERE idfunc = ?`, id,
                (error, result) => {
                    if (error) {
                        reject("Não foi possível encontrar funcionários")
                    } else {
                        resolve(result)
                    }
                })
        })
    }

    insertFuncionario = (newfunc) => {
        return new Promise((resolve, reject) => {

            this.conexao.query("SELECT * FROM FUNCIONARIOS WHERE email = ?", [newfunc.email], (err, result) => {
                if(err){
                    res.send(err)
                }
                if(result.length == 0){
                    bcrypt.hash(newfunc.senha, saltRouns, (err, hash) => {
                        conexao.query("INSERT INTO FUNCIONARIOS (nome, email, senha, idade, sexo, cargo) VALUES (?, ?, ?, ?, ?, ?)", [newfunc.nome, newfunc.email, hash, newfunc.idade, newfunc.sexo, newfunc.cargo], (err, response) => {
                            if(err){
                                reject(err)
                            }
                            resolve({msg: 'cadastrado com sucesso'})
                        })
                    })
                } else {
                    reject({msg: 'email já existente'})
                }
            })
        })
    }


    updateFuncionario = (id, funcionario) =>{
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE FUNCIONARIOS SET nome = ? , email = ? , senha = ? , idade =? , sexo = ?, cargo = ? WHERE idfunc = ?  `,
                [funcionario.nome,
                funcionario.email,
                funcionario.senha,
                funcionario.idade,
                funcionario.sexo,
                funcionario.cargo,
                id],
                (error, result) => {
                    if (error) {
                        reject("Não foi possível realizar a atualização")
                    } else {
                        resolve(result);
                    }
                }

            )
        })
    }

    deleteFuncionario = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM FUNCIONARIOS WHERE idfunc = ?`, id, (error) => {
                if (error) {
                    reject("Não foi possível deletar funcionário")
                } else {
                    resolve(true)
                }
            })
        })
    }

}

module.exports = new FuncionarioDAO()