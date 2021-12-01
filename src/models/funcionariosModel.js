
// const moment = require('moment')
const conexao = require('../infra/conexao')
const multer = require('multer');
const FuncionarioDAO = require("../dao/funcionarioDAO");

const parser = multer({ dest: 'public/uploads/' })


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

    login = async (funcionarios, res) => {
        const email = funcionarios.email
        const senha = funcionarios.senha

        try {
            const resultlog = await FuncionarioDAO.loginFuncionario(email, senha)
            res.status(200).json(resultlog)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    selectAll = async (req, res) =>{
        try {
            const result = await FuncionarioDAO.selectAllFuncionario();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id;

        try {
            const result = await FuncionarioDAO.selectIdFuncionario(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }



    create = async (funcionarios, res) => {

       try {
           const newfunc = await FuncionarioDAO.insertFuncionario(funcionarios)
           res.status(201).json(newfunc)
       } catch (error) {
           res.status(500).json(error)
       }
    }

    update = async (req, res)=>{

        const id = req.params.id;
        const funcionario = req.body;

        try {
            const result = await FuncionarioDAO.updateFuncionario(id, funcionario)
            res.status(204).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    delete = async (req, res) =>{

        const id = req.params.id;

        try {
            const result = await FuncionarioDAO.deleteFuncionario(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }



    /*

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
    */
}//fim Model

module.exports = new FuncionariosModel(FuncionarioDAO)