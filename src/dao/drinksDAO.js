const conexao = require('../infra/conexao')

class DrinksDAO {

    constructor () {
        this.conexao = conexao
    }

    selectAllDrinks = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM DRINKS`, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar a lista de drinks.')
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectDrinksByID  = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM DRINKS WHERE iddrinks = ?`, id,
            (error,result) => {
                if (error) {
                    reject('Drinks não encontrado')
                } else {
                    resolve(result[0])
                }
            })
        })
    }

    insertDrinks = (drinks) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO DRINKS (tipoBebida, marcaBebida, teorAlcolico, preco) VALUES (?, ?, ?, ?)`, [ drinks.tipoBebida, drinks.marcaBebida, drinks.teorAlcolico, drinks.preco ],
                (error) => {
                    if (error) {
                        reject('Erro ao inserir o drinks: ' + error)
                    } else {
                        resolve('Drinks cadastrado com sucesso')
                    }
                })
        })
    }

    updateDrinks = (id, drinks) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE DRINKS SET tipoBebida = ?, marcaBebida = ?, teorAlcolico = ?, preco = ? WHERE iddrinks = ?`, [ drinks.tipoBebida, drinks.marcaBebida, drinks.teorAlcolico, drinks.preco, id ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar o cadastrado: ' + error)
                } else {
                    resolve('Drinks atualizado com sucesso.')
                }
            })
        })
    }

    deleteDrinks = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM DRINKS WHERE iddrinks = ?`, id , (error) => {
                if (error) {
                    reject('Não foi possível excluir o drinks: ' + error)
                } else {
                    resolve('Drinks excluído com sucesso.')
                }
            })
        })
    }
}

module.exports = new DrinksDAO(conexao)