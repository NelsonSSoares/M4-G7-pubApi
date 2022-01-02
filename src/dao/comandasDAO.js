const conexao = require('../infra/conexao')

class ComandasDAO {

    constructor () {
        this.conexao = conexao
    }

    selectAllComandas = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM comandas`, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar a lista de comandas.')
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectComandaByID  = (id) => {
        return new Promise((resolve, reject) => {
            let comanda = {}
            this.conexao.query(`SELECT * FROM comandas WHERE id = ?`, id,
            async (error,result) => {
                comanda = result[0]

                comanda.comidas = await this.getComidasByComandaId(comanda.id)
                comanda.bebidas = await this.getBebidasByComandaId(comanda.id)

                if (error) {
                    reject('Comanda não encontrada')
                } else {
                    resolve(comanda)
                }
            })
        })
    }

    getComidasByComandaId = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`select c.*, cc.quantidade from comidas c
                inner join comandas_comidas cc
                on c.id = cc.idComida
                inner join comandas cm
                on cm.id = cc.idComanda
                where cm.id = ?`
            , id, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar as comidas')
                } else {
                    resolve(result)
                }
            })
        })
    }

    getBebidasByComandaId = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`select b.*, cb.quantidade from bebidas b
                inner join comandas_bebidas cb
                on b.id = cb.idBebida
                inner join comandas cm
                on cm.id = cb.idComanda
                where cm.id = ?`
            , id, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar as bebidas')
                } else {
                    resolve(result)
                }
            })
        })
    }

    insertComanda = (comanda) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO  comandas (numero, idFuncionario) VALUES (?, ?)`, [ comanda.numero, comanda.idFuncionario ?? null ],
                (error, result) => {
                    this.conexao.query('select * from comandas where id = last_insert_id()', (err, res) => {
                        comanda.comidas.forEach(comida => {
                            this.conexao.query(`INSERT INTO  comandas_comidas (idComanda, idComida, quantidade) VALUES (?, ?, ?)`, [ res[0].id, comida.id, comida.quantidade ],
                            (err) => {
                                if (err) console.log(err)
                            })
                        })

                        comanda.bebidas.forEach(bebida => {
                            this.conexao.query(`INSERT INTO  comandas_bebidas (idComanda, idBebida, quantidade) VALUES (?, ?, ?)`, [ res[0].id, bebida.id, bebida.quantidade ],
                            (err) => {
                                if (err) console.log(err)
                            })
                        })
                    })
                    if (error) {
                        reject('Erro ao inserir a comanda: ' + error)
                    } else {
                        resolve('Comanda cadastrada com sucesso')
                    }
                })
        })
    }

    updateComanda = (id, comanda) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE comandas SET numero = ?, idFuncionario = ?, WHERE id = ?`, [ comanda.numero, comanda.idFuncionario, id ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar a comanda: ' + error)
                } else {
                    resolve('Comanda atualizada com sucesso.')
                }
            })
        })
    }

    deleteComanda = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM comandas WHERE id = ?`, id , (error) => {
                if (error) {
                    reject('Não foi possível excluir a comanda: ' + error)
                } else {
                    resolve('Comanda excluída com sucesso.')
                }
            })
        })
    }
}

module.exports = new ComandasDAO()