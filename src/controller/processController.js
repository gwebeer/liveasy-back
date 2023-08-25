const Process = require('../models/processModel');

module.exports = {
    
    async createProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que o usuário cria um novo processo."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ProcessSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "64da742da876e905b9b149a2",
                    "step": "Planejamento",
                    "status": "Em progresso",
                    "_id": "64dc043391834dca8c01aacf",
                    "createdAt": "2023-08-15T23:03:15.343Z",
                    "updatedAt": "2023-08-15T23:03:15.343Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "errors": { },
                        "_message": "Example error",
                        "name": "ExampleError",
                        "message": "Example error: user: Message of the error"
                    }
                }
            }
        */
        try {
            const createProcess = await Process.create(request.body);
            return response.status(201).json(createProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
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

}