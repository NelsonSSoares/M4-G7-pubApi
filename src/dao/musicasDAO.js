const conexao = require('../infra/conexao')

class MusicasDAO {

    constructor () {
        this.conexao = conexao
    }

    selectAllMusicas = () => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM MUSICAS`, (error, result) => {
                if (error) {
                    reject('Não foi possível carregar a lista de músicas.')
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectMusicaByID  = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`SELECT * FROM MUSICAS WHERE idmusica = ?`, id,
            (error,result) => {
                if (error) {
                    reject('Música não encontrada')
                } else {
                    resolve(result[0])
                }
            })
        })
    }

    insertMusica = (musica) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`INSERT INTO MUSICAS (nome, artista, album, duracao) VALUES (?, ?, ?, ?)`, [ musica.nome, musica.artista, musica.album, musica.duracao ],
                (error) => {
                    if (error) {
                        reject('Erro ao inserir a música: ' + error)
                    } else {
                        resolve('Música cadastrada com sucesso')
                    }
                })
        })
    }

    updateMusica = (id, musica) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`UPDATE MUSICAS SET nome = ?, artista = ?, album = ?, duracao = ? WHERE idmusica = ?`, [ musica.nome, musica.artista, musica.album, musica.duracao, id ],
            (error) => {
                if (error) {
                    reject('Erro ao atualizar o cadastrado: ' + error)
                } else {
                    resolve('Música atualizada com sucesso.')
                }
            })
        })
    }

    deleteMusica = (id) => {
        return new Promise((resolve, reject) => {
            this.conexao.query(`DELETE FROM MUSICAS WHERE idmusica = ?`, id , (error) => {
                if (error) {
                    reject('Não foi possível excluir a música: ' + error)
                } else {
                    resolve('Música excluída com sucesso.')
                }
            })
        })
    }
}

module.exports = new MusicasDAO()