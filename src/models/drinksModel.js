const DrinksDAO = require('../dao/drinksDAO')

class DrinksModel {

    selectAll = async (req, res) => {
        try {
            const result = await DrinksDAO.selectAllDrinks()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    selectById = async (req, res) =>{
        const id = req.params.id

        try {
            const result = await DrinksDAO.selectDrinksByID(id)

            if (result) {
                res.status(200).json(result)
            } else {
                res.status(404).json({msg: 'Drinks não encontrado.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    create = async (drinks, res) => {
        try {
            const result = await DrinksDAO.insertDrinks(drinks)
            res.status(201).json({ msg: result })
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    update = async (req, res) => {
        const id = req.params.id
        const drinks = req.body

        try {
            const drinks = await DrinksDAO.selectDrinksByID(id)

            if (drinks) {
                const result = await DrinksDAO.updateDrinks(id, drinks)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({msg: 'Drinks não encontrado.'})
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }

    delete = async (req, res) => {
        const id = req.params.id

        try {
            const drinks = await DrinksDAO.selectDrinksByID(id)

            if (drinks) {
                const result = await DrinksDAO.deleteDrinks(id)
                res.status(200).json({ msg: result })
            } else {
                res.status(404).json({ msg: 'Drinks não encontrado.' })
            }
        } catch (error) {
            res.status(500).json({ erro: error })
        }
    }
}

module.exports = new DrinksModel()