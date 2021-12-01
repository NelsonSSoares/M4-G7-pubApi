const comidaDAO = require('../dao/comidaDAO');
const ComidaDAO = require('../dao/comidaDAO');
class ComidaModel{

    selectAll = async(req, res)=> {
        try {
            const result = await ComidaDAO.selectAllFood()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    selectById = async (req, res) => {
        const {id} = req.paramms.id;
        try {
            const result = await ComidaDAO.selectFoodById(id);
            res.status(200).json(result)
        } catch (error) {
            
        }
    }

    create = async (req, res) => {
    
        const {idcomida, nome, qnt, preco } = req.body;
        
        try {
            const newFood = await ComidaDAO.insertFood(req);
            res.status(201).json(newFood);
            
        } catch (error) {
            res.status(500).json(error);
        }
    }

    update = async (req, res) => {
        const {id} = req.params.id;
        const comida = req.body;

        try {
            const result = await ComidaDAO.updateFood(id,comida)
            res.status(204).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    delete = async (req, res) => {
        const {id} = req.params.id;
        try {
            const result = await comidaDAO.deleteFood(id)
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

}

module.exports = new ComidaModel(ComidaDAO)