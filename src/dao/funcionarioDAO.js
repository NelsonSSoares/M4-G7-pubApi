const bcrypt = require("bcrypt");
const conexao = require("../infra/conexao");
const saltRouns = 10
class FuncionarioDAO {

    constructor() {
        this.conexao = conexao;
    }


    loginFuncionario = (email, senha) => {
        return new Promise((resolve, reject) => {
            this.conexao.query("SELECT * FROM funcionarios WHERE email = ? ", email, (err, result) => {
                if (err) {
                    reject("unexpected error: " + err)
                }
                if (result.length > 0) {
                    const id = result[0].id

                    bcrypt.compare(senha, result[0].senha, (erro, result) => {
                        if (result) {
                            resolve({ msg: "Usuário logado com sucesso", id: id })
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
            this.conexao.query(`SELECT * FROM funcionarios`, (error, result) => {
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
            this.conexao.query(`SELECT * FROM funcionarios WHERE id = ?`, id,
                (error, result) => {
                    if (error) {
                        reject("Não foi possível encontrar funcionário")
                    } else {
                        resolve(result)
                    }
                })
        })
    }

    insertFuncionario = (newfunc) => {
        return new Promise((resolve, reject) => {

            this.conexao.query("SELECT * FROM funcionarios WHERE email = ?", [newfunc.email], (err, result) => {
                if(err){
                    res.send(err)
                }
                if(result.length == 0){
                    bcrypt.hash(newfunc.senha, saltRouns, (err, hash) => {
                        conexao.query("INSERT INTO funcionarios (nome, cargo, cpf, email, senha) VALUES (?, ?, ?, ?, ?)", [newfunc.nome, newfunc.cargo, newfunc.cpf, newfunc.email, hash], (err, response) => {
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
            bcrypt.hash(funcionario.senha, saltRouns, (err, hash) => {
                this.conexao.query(`UPDATE funcionarios SET nome = ? , cargo = ? , cpf = ? , email =? , senha = ? WHERE id = ?  `,
                    [funcionario.nome,
                    funcionario.cargo,
                    funcionario.cpf,
                    funcionario.email,
                    hash,
                    id],
                    (error, result) => {
                        if (error) {
                            reject("Não foi possível realizar a atualização")
                        } else {
                            resolve("Funcionário alterado com sucesso.");
                        }
                    }

                )
            })
        })
    }

    deleteFuncionario = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM funcionarios WHERE id = ?`, id, (error) => {
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