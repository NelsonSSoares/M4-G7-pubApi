const conexao = require('../infra/conexao');

class ComidaDAO{
    constructor(){
        this.conexao = conexao;
    }

    selectAllFood(){
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM COMIDAS`, (error, result) => {
                if (error) {
                    reject('Unable to load food list.');
                } else {
                    resolve(result);
                }
            })
        })
    }
    
    selectFoodById(id){
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM COMIDAS WHERE idcomida = ?`, id,
            (error,result) => {
                if (error) {
                    reject('food not found');
                } else {
                    resolve(result[0]);
                }
            })
        })
    }
    
    insertFood(comida){
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO COMIDAS (,nome, qnt, preco) VALUES (?, ?, ?)`, [ ,comida.nome, comida.qnt, comida.preco ],
                (error) => {
                    if (error) {
                        reject('Error inserting food: ' + error);
                    } else {
                        resolve('food successfully registered');
                    }
                })
        })
    }

    updateFood(id, comida){
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE COMIDAS SET nome = ?, qnt = ? , preco =?  WHERE idcomida = ?`, [ comida.nome, comida.qnt, comida.preco, id ],
            (error) => {
                if (error) {
                    reject('error when updating registration: ' + error)
                } else {
                    resolve('food successfully updated')
                }
            })
        })
    }

    deleteFood(id){
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM COMIDAS WHERE idcomida = ?`, id , (error) => {
                if (error) {
                    reject('Could not delete food: ' + error)
                } else {
                    resolve('food deleted successfully.')
                }
            })
        })
    }



}

module.exports = new ComidaDAO(conexao);