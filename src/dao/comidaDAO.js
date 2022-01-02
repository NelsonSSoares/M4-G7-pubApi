const conexao = require('../infra/conexao');

class ComidaDAO{
    constructor(){
        this.conexao = conexao;
    }

    selectAllComida(){
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM comidas`, (error, result) => {
                if (error) {
                    reject('Erro ao listar');
                } else {
                    resolve(result);
                }
            })
        })
    }

    selectComidaById(id){
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM comidas WHERE idcomida = ?`, id,
            (error,result) => {
                if (error) {
                    reject('Comida não encontrada');
                } else {
                    resolve(result[0]);
                }
            })
        })
    }

    insertComida(comida){
        console.log(comida)
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO comidas (nome, descricao, preco, imagem) VALUES (?, ?, ?, ?)`, [comida.nome, comida.descricao, comida.preco, comida.imagem ],
                (error) => {
                    if (error) {
                        reject('Erro ao cadastrar: ' + error);
                    } else {
                        resolve('Comida cadastrada com sucesso');
                    }
                })
        })
    }

    updateComida(id, comida){
        console.log(id)
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE comidas SET nome = ? , preco = ?, descricao = ?, imagem = ?  WHERE id = ?`, [ comida.nome, comida.descricao, comida.preco, comida.imagem, id  ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar: ' + error)
                } else {
                    resolve('Comida atualizada com sucesso')
                }
            })
        })
    }

    deleteComida(id){
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM comidas WHERE idcomida = ?`, id , (error) => {
                if (error) {
                    reject('Erro ao deletar: ' + error)
                } else {
                    resolve('Comida deletada com sucesso.')
                }
            })
        })
    }



}

module.exports = new ComidaDAO(conexao);