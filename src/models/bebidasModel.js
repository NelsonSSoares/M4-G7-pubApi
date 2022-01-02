const BebidasDAO = require('../dao/bebidasDAO')

class bebidasModel {

    selectAll = async (req, res) => {
        try {
            const result = await BebidasDAO.selectAllBebidas()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id

        try {
            const result = await BebidasDAO.selectBebidasByID(id)

            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({msg: 'Bebida não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    create = async (bebidas, res) => {
        try {
            const result = await BebidasDAO.insertBebidas(bebidas)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    update = async (req, res) => {
        const id = req.params.id
        const bebidas = req.body

        try {
            const bebida = await BebidasDAO.selectBebidasByID(id)

            if (bebida) {
                const result = await BebidasDAO.updateBebidas(id, bebidas)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({msg: 'Bebida não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    delete = async (req, res) => {
        const id = req.params.id

        try {
            const bebidas = await BebidasDAO.selectBebidasByID(id)

            if (bebidas) {
                const result = await BebidasDAO.deleteBebidas(id)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({ msg: 'Bebida não encontrada.' })
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new bebidasModel()