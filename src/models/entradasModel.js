const EntradasDAO = require('../dao/EntradasDAO')

class EntradasModel {

    selectAll = async (req, res) => {
        try {
            const result = await EntradasDAO.selectAllEntradas()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id

        try {
            const result = await EntradasDAO.selectEntradaByID(id)

            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({msg: 'Entrada não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    create = async (entrada, res) => {
        try {
            const result = await EntradasDAO.insertEntrada(entrada)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    update = async (req, res) => {
        const id = req.params.id

        try {
            const entrada = await EntradasDAO.selectEntradaByID(id)

            if (entrada) {
                const result = await EntradasDAO.updateEntrada(id, req.body)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({msg: 'Entrada não encontrada.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    delete = async (req, res) => {
        const id = req.params.id

        try {
            const entrada = await EntradasDAO.selectEntradaByID(id)

            if (entrada) {
                const result = await EntradasDAO.deleteEntrada(id)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({ msg: 'Entrada não encontrada.' })
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new EntradasModel()