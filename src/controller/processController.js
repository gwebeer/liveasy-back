const Process = require('../models/processModel');

module.exports = {
    
    async createProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que cria um novo processo"
        */
        try {
            const createProcess = await Process.create(request.body);
            return response.status(201).json({ createProcess });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },
    
    async getProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que busca um ou vários processos"
        */
        if (request.params.id == "all") {
            try {
                const getProcess = await Process.findOne({ _id: request.params.id })
                return response.json(getProcess);
            } catch (error) {
                console.log("Erro ao obter o detalhe do processo", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getProcesses = await Process.find()
                return response.json(getProcesses);
            } catch (error) {
                console.log("Erro ao obter todos os processos", error)
                return response.status(400).json({ error });
            }
        }
    },
    
    async getUserProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que busca os processos anexados ao usuário."
        */
        try {
            const getProcess = await Process.findOne({ user: request.params.id })
            return response.json(getProcess);
        } catch (error) {
            console.log("Erro ao obter o detalhe do processo", error)
            return response.status(400).json({ error });
        }
    },
    
    async updateProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que atualiza um processo"
        */
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
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que deleta um processo"
        */
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteProcess);
        } catch (error) {
            console.log("Erro ao deletar item da coleção Process", error)
            return response.status(400).json({ error });
        }
    },

}