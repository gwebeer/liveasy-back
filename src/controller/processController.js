const Process = require('../models/userModel');

module.exports = {
    // Create Process
    async createProcess(req, res) {
        try {
            const createProcess = await Process.create(req.body);
            return res.json({ processCreate });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },
    // Create Process
    async createDirect(content) {
        try {
            const createProcess = await Process.create(content);
            return
        } catch (error) {
            return
        }
    },

    // Delete Process
    async deleteProcess(req, res) {
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: req.params.id });
            return res.json(deleteProcess);
        } catch (error) {
            console.log("Erro ao deletar item da coleção Process", error)
            return res.status(400).json({ error });
        }
    },

    // Update Process
    async updateProcess(req, res) {
        try {
            const updateProcess = await Process.findOneAndUpdate({ _id: req.params.id }, req.body);
            return res.json(updateProcess);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção Process", error)
            return res.status(400).json({ error });
        }
    },

    // Get Process(es)
    async getProcess(req, res) {
        if (req.params.id == "all") {
            try {
                const getProcesses = await Process.find()
                return res.json(getProcesses);
            } catch (error) {
                console.log("Erro ao obter todos os processos", error)
                return res.status(400).json({ error });
            }
        } else {
            try {
                const getProcess = await Process.findOne({ _id: req.params.id })
                return res.json(getProcess);
            } catch (error) {
                console.log("Erro ao obter o detalhe do processo", error)
                return res.status(400).json({ error });
            }
        }

    }
}