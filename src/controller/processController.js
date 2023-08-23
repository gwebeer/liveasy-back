const Process = require('../models/processModel');

module.exports = {
    
    async createProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que cria um novo processo"
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
            #swagger.description = "Função que busca um ou vários processos"
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
        */
        if (request.params.id == "all") {
            try {
                const getProcesses = await Process.find()
                return response.json(getProcesses);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getProcess = await Process.findOne({ _id: request.params.id })
                return response.json(getProcess);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    },
    
    async getUserProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que busca os processos anexados ao usuário."
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
        */
        try {
            const getProcess = await Process.findOne({ user: request.params.user_id })
            return response.status(200).json(getProcess);
        } catch (error) {
            return response.status(404).json({ error });
        }
    },
    
    async updateProcess(request, response) {
        /* 
            #swagger.tags = ["processController"]
            #swagger.description = "Função que o usuário atualiza um processo"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "user": "ObjectId",
                    "id": "ObjectId",
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
            #swagger.description = "Função que deleta um processo"
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
        */
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}