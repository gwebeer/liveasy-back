const Process = require('../models/processModel');

module.exports = {
    
    async createProcess(request, response) {
        try {
            const createProcess = await Process.create(request.body);
            return response.status(201).json({ createProcess });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },
    
    async getProcess(request, response) {
        try {
            const getProcess = await Process.findOne({ _id: request.params.id })
            return response.json(getProcess);
        } catch (error) {
            console.log("Erro ao obter o detalhe do processo", error)
            return response.status(400).json({ error });
        }
    },
    
    async getProcesses(request, response) {
        try {
            const getProcesses = await Process.find()
            return response.json(getProcesses);
        } catch (error) {
            console.log("Erro ao obter todos os processos", error)
            return response.status(400).json({ error });
        }
    },
    
    async getUserProcess(request, response) {
        try {
            const getProcess = await Process.findOne({ user: request.params.id })
            return response.json(getProcess);
        } catch (error) {
            console.log("Erro ao obter o detalhe do processo", error)
            return response.status(400).json({ error });
        }
    },
    
    async updateProcess(request, response) {
        if (request.params.key === "user") {
            try {
                const proccessUpdate = await Process.findOneAndUpdate({ user: request.params.value }, request.body);
                return response.json(proccessUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "id") {
            try {
                const proccessUpdate = await Process.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(proccessUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateProcess = await Process.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.json(updateProcess);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção Process", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteProcess(request, response) {
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteProcess);
        } catch (error) {
            console.log("Erro ao deletar item da coleção Process", error)
            return response.status(400).json({ error });
        }
    },

}