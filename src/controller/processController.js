const Process = require('../models/processModel');

module.exports = {
    // Create Process
    async createProcess(req, res) {
        try {
            const createProcess = await Process.create(req.body);
            return res.status(201).json({ createProcess });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },
<<<<<<< HEAD
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
        if (req.params.key === "user") {
            try {
                const proccessUpdate = await Process.findOneAndUpdate({ user: req.params.value }, req.body);
                return res.json(proccessUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
            }
        }

        if (req.params.key === "id") {
            try {
                const proccessUpdate = await Process.findOneAndUpdate({ _id: req.params.value }, req.body);
                return res.json(proccessUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
            }
        }



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

    },

    async getUserProcess(req, res) {
        try {
            const getProcess = await Process.findOne({ user: req.params.id })
            return res.json(getProcess);
        } catch (error) {
            console.log("Erro ao obter o detalhe do processo", error)
            return res.status(400).json({ error });
        }
    }

=======
    
    async getProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que o usuário busca um ou vários processos."
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64dc043391834dca8c01aacf",
                    "user": "64da742da876e905b9b149a2",
                    "step": "Planejamento",
                    "status": "Em progresso",
                    "createdAt": "2023-08-15T23:03:15.343Z",
                    "updatedAt": "2023-08-15T23:03:15.343Z",
                    "__v": 0
                }]
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi(ram) encontrado(s) o(s) processo(s).",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getProcesses = await Process.find()
                if (getProcesses == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os processos.", "_return": getProcesses });
                }
                return response.json(getProcesses);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getProcess = await Process.findOne({ _id: request.params.id })
                if (getProcess == null) {
                    return response.status(404).json({ "message": "Não foi encontrado o processo.", "_return": getProcess });
                }
                return response.json(getProcess);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },
    
    async updateProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que o usuário o usuário atualiza um processo."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "step": "Planejamento",
                    "status": "Em progresso",
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64dc043391834dca8c01aacf",
                    "user": "64da742da876e905b9b149a2",
                    "step": "Planejamento",
                    "status": "Em progresso",
                    "createdAt": "2023-08-15T23:03:15.343Z",
                    "updatedAt": "2023-08-15T23:03:15.343Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        try {
            const updateProcess = await Process.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deleteProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que o usuário deleta um processo."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64dc043391834dca8c01aacf",
                    "user": "64da742da876e905b9b149a2",
                    "step": "Planejamento",
                    "status": "Em progresso",
                    "createdAt": "2023-08-15T23:03:15.343Z",
                    "updatedAt": "2023-08-17T14:34:09.866Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado o processo.",
                    "_return": "null"
                }
            }
        */
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: request.params.id });
            if (deleteProcess == null) {
                return response.status(404).json({ "message": "Não foi encontrado o processo.", "_return": deleteProcess });
            }
            return response.status(200).json(deleteProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    // Functions
    async getUserProcess(request, response) {
        /* 
            #swagger.tags = ["processController - Functions"]
            #swagger.description = "Função que o usuário busca os processos anexados ao usuário."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64dc043391834dca8c01aacf",
                    "user": "64da742da876e905b9b149a2",
                    "step": "Planejamento",
                    "status": "Em progresso",
                    "createdAt": "2023-08-15T23:03:15.343Z",
                    "updatedAt": "2023-08-15T23:03:15.343Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of Message Error"
                    }
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado o usuário do processo.",
                    "_return": "null"
                }
            }
        */
        try {
            const getProcess = await Process.findOne({ user: request.params.id })
            if (getProcess == null) {
                return response.status(404).json({ "message": "Não foi encontrado o usuário do processo.", "_return": getProcess });
            }
            return response.status(200).json(getProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

>>>>>>> d5da515605c73bff3018bd725929cdf727e8e123
}