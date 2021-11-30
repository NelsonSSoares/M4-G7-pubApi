
// const moment = require('moment')
const bcrypt = require("bcrypt")
const conexao = require('../infra/conexao')
const multer = require('multer');
const FuncionarioDAO = require("../dao/funcionarioDAO");

const parser = multer({ dest: 'public/uploads/' })
const saltRouns = 10

class FuncionariosModel {
    /*
    constructor(idfunc , nome, email, senha, idade, sexo, cargo, imagem){
        this.idfunc = idfunc,
        this.nome = nome,
        this.email = email,
        this.senha = senha,
        this.idade = idade,
        this.sexo = sexo,
        this.cargo = cargo,
        this.imagem = imagem
    }
    */

    create = async (funcionarios, res) => {
        const {
            idfunc , nome, email, senha, idade, sexo, cargo, imagem
        } = funcionarios.body;

       try {
           const newfunc = await FuncionarioDAO.insertFuncionario(funcionarios)
           res.status(201).json(newfunc)
       } catch (error) {
           res.status(500).json(error)
       }
    }

    login = async (funcionarios, res) => {
        const email = funcionarios.email
        const senha = funcionarios.senha

        conexao.query("SELECT * FROM funcionarios WHERE email = ? ", [email], (err, result) => {
            if(err){
                res.send(err);
            }
            if(result.length > 0){
                const idfunc = result[0].idfunc

                bcrypt.compare(senha, result[0].senha, (erro, result) => {
                    if(result){
                        res.status(200).json({msg: "Usuario logado com sucesso", id: idfunc})
                    } else {
                        res.status(401).json({msg: 'senha incorreta'})
                    }
                })
            } else {
                res.status(400).json({msg: "email não encontrado"})
            }
        })
    }

    upload = async (req, res) => {
        parser.single('avatar')(req, res, err => {
            if (err)
                res.status(500).json({ error: 1, payload: err });
            else {
                const image = {};
                image.id = req.file.filename;
                image.url = `/uploads/${image.id}`;
                res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
            }
        });
    }

    lista = async (idfunc, res) => {
        const sql = 'select * from mentor where idmentor <> ' + idfunc

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    filtrar = async (filtros, res) =>{
        const idUsuario = filtros.usuarioLogado
        const filtro = filtros.filtro

        const sql = 'select * from mentor where idmentor <> ' + idUsuario + ' and atributo like '+ `'%${filtro}%'` + 'or nome like '+ `'%${filtro}%'`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new FuncionariosModel(FuncionarioDAO)