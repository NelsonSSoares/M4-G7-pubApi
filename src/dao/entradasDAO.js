const conexao = require('../infra/conexao')

class EntradasDAO {

    constructor () {
        this.conexao = conexao
    }

    selectAllEntradas = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM ENTRADAS`, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar a lista de entradas.')
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectEntradaByID  = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM ENTRADAS WHERE identradas = ?`, id,
            (error,result) => {
                if (error) {
                    reject('Entrada não encontrada')
                } else {
                    resolve(result[0])
                }
            })
        })
    }

    insertEntrada = (entrada) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO  ENTRADAS (nome, cpf, pedidos) VALUES (?, ?, ?)`, [ entrada.nome, entrada.cpf, entrada.pedidos ],
                (error) => {
                    if (error) {
                        reject('Erro ao inserir a Entrada: ' + error)
                    } else {
                        resolve('Entrada cadastrada com sucesso')
                    }
                })
        })
    }

    updateEntrada = (id, entrada) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE ENTRADAS SET nome = ?, cpf = ?, pedidos = ? WHERE identradas = ?`, [ entrada.nome, entrada.cpf, entrada.pedidos, id ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar o cadastro: ' + error)
                } else {
                    resolve('Entrada atualizada com sucesso.')
                }
            })
        })
    }

    deleteEntrada = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM ENTRADAS WHERE identradas = ?`, id , (error) => {
                if (error) {
                    reject('Não foi possível excluir a Entrada: ' + error)
                } else {
                    resolve('Entrada excluída com sucesso.')
                }
            })
        })
    }
}

module.exports = new EntradasDAO()