const FuncionarioDAO = require("../dao/funcionarioDAO");
class FuncionariosModel {
    login = async (funcionarios, res) => {
        const email = funcionarios.email
        const senha = funcionarios.senha

        try {
            const result = await FuncionarioDAO.loginFuncionario(email, senha)
            res.status(200).json({msg: 'Login realizado com sucesso'})
        } catch (error) {
            res.status(500).json({msg: 'Erro ao realizar login' + error})
        }
    }

    selectAll = async (req, res) =>{
        try {
            const result = await FuncionarioDAO.selectAllFuncionario();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({msg: 'Erro ao realizar login' + error})
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id;

        try {
            const result = await FuncionarioDAO.selectIdFuncionario(id);
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({msg: 'Funcionário não encontrado' + error})
        }
    }



    create = async (funcionarios, res) => {

       try {
           const result = await FuncionarioDAO.insertFuncionario(funcionarios)
           res.status(201).json(result)
       } catch (error) {
           res.status(500).json({msg: 'Erro ao cadastrar funcionário' + error})
       }
    }

    update = async (req, res)=>{

        const id = req.params.id;
        const funcionario = req.body;

        try {
            const result = await FuncionarioDAO.updateFuncionario(id, funcionario)
            res.status(200).json({ msg: "Funcionário atualizado com sucesso." })
        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar funcionario" + error})
        }
    }

    delete = async (req, res) =>{

        const id = req.params.id;

        try {
            const result = await FuncionarioDAO.deleteFuncionario(id);
            res.status(200).json({ msg: "Funcionário excluído com sucesso." })
        } catch (error) {
            res.status(500).json({msg: 'Erro ao deletar funcionário' + error})
        }
    }

}

module.exports = new FuncionariosModel(FuncionarioDAO)