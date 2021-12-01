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
        const {idcomida, } = req.body;

        try {
            
        } catch (error) {
            
        }
    }

    update = async (req, res) => {

    }

    delete = async (req, res) => {
        
    }

}

module.exports = new ComidaModel(ComidaDAO)