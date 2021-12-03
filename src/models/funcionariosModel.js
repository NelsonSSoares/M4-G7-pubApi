const FuncionarioDAO = require("../dao/funcionarioDAO");
class FuncionariosModel {
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

}

module.exports = new FuncionariosModel(FuncionarioDAO)