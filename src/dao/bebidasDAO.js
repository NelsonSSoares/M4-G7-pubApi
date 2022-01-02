const conexao = require('../infra/conexao')

class BebidasDAO {

    constructor () {
        this.conexao = conexao
    }

    selectAllBebidas = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM bebidas`, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar a lista de bebidas.')
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectBebidasByID  = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM bebidas WHERE id = ?`, id,
            (error,result) => {
                if (error) {
                    reject('Bebida não encontrada')
                } else {
                    resolve(result[0])
                }
            })
        })
    }

    insertBebidas = (bebida) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO bebidas (nome, tipo, marca, preco) VALUES (?, ?, ?, ?)`, [ bebida.nome, bebida.tipo, bebida.marca, bebida.preco ],
                (error) => {
                    if (error) {
                        reject('Erro ao inserir o bebidas: ' + error)
                    } else {
                        resolve('Bebida cadastrada com sucesso')
                    }
                })
        })
    }

    updateBebidas = (id, bebidas) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE bebidas SET nome = ?, tipo = ?, marca = ?, preco = ? WHERE id = ?`, [ bebidas.nome, bebidas.tipo, bebidas.marca, bebidas.preco, id ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar o cadastrado: ' + error)
                } else {
                    resolve('Bebida atualizada com sucesso.')
                }
            })
        })
    }

    deleteBebidas = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM bebidas WHERE id = ?`, id , (error) => {
                if (error) {
                    reject('Não foi possível excluir a bebida: ' + error)
                } else {
                    resolve('Bebida excluída com sucesso.')
                }
            })
        })
    }
}

module.exports = new BebidasDAO(conexao)