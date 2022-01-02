
const ComidaDAO = require('../dao/comidaDAO');
class ComidaModel{

    selectAll = async(req, res)=> {
        try {
            const result = await ComidaDAO.selectAllComida()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    selectById = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ComidaDAO.selectComidaById(id);
            res.status(200).json(result)
        } catch (error) {

        }
    }

    create = async (req, res) => {
        try {
            const comida = await ComidaDAO.insertComida(req);
            res.status(201).json(comida);

        } catch (error) {
            res.status(500).json(error);
        }
    }

    update = async (req, res) => {
        const id = req.params.id;
        const comida = req.body;

        try {
            const result = await ComidaDAO.updateComida(id,comida)
            res.status(204).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    delete = async (req, res) => {
        const id = req.params.id;
        try {
            const result = await ComidaDAO.deleteComida(id)
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = new ComidaModel(ComidaDAO)