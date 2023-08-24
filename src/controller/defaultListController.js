const DefaultList = require('../models/defaultListModel');

module.exports = {
    // Create Item
    async createItem(req, res) {
        try {
            const createItem = await DefaultList.create(req.body);
            return res.json({ createItem });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },

    // Delete Item
    async deleteItem(req, res) {
        try {
            const deleteItem = await DefaultList.findOneAndDelete({ _id: req.params.id });
            return res.json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return res.status(400).json({ error });
        }
    },

    // Update Item
    async updateItem(req, res) {
        try {
            const updateItem = await DefaultList.findOneAndUpdate({ _id: req.params.id }, req.body);
            return res.json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return res.status(400).json({ error });
        }
    },

    // Get Process(es)
    async getItem(req, res) {
        if (req.params.id == "all") {
            try {
                const getItem = await DefaultList.find()
                return res.json(getItem);
            } catch (error) {
                console.log("Erro ao obter todos os itens", error)
                return res.status(400).json({ error });
            }
        } else {
            try {
                const getItem = await DefaultList.findOne({ _id: req.params.id })
                return res.json(getItem);
            } catch (error) {
                console.log("Erro ao obter o item requisitado", error)
                return res.status(400).json({ error });
            }
        }

    }
}