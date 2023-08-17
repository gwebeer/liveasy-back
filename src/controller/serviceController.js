const Service = require("../models/serviceModel");

module.exports = {
 
    async createService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que cria um novo serviço"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ServiceSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "process": "64de31819111a0f8184540fb",
                    "title": "Instalação de Internet",
                    "value": 120,
                    "_id": "64de32089111a0f8184540fd",
                    "createdAt": "2023-08-17T14:43:20.569Z",
                    "updatedAt": "2023-08-17T14:43:20.569Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "errors": {
                            "process": {
                                "stringValue": "\"ObjectId()\"",
                                "valueType": "string",
                                "kind": "ObjectId",
                                "value": "ObjectId()",
                                "path": "process",
                                "reason": {},
                                "name": "CastError",
                                "message": "Cast to ObjectId failed for value \"ObjectId()\" (type string) at path \"process\" because of \"BSONError\""
                            }
                        },
                        "_message": "Service validation failed",
                        "name": "ValidationError",
                        "message": "Service validation failed: process: Cast to ObjectId failed for value \"ObjectId()\" (type string) at path \"process\" because of \"BSONError\""
                    }
                }
            }
        */
        try {
            const createService = await Service.create(request.body);
            return response.status(201).json(createService);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que busca um ou vários serviços"
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64de32089111a0f8184540fd",
                    "process": "64de31819111a0f8184540fb",
                    "title": "Instalação de Internet",
                    "value": 120,
                    "createdAt": "2023-08-17T14:43:20.569Z",
                    "updatedAt": "2023-08-17T14:43:20.569Z",
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
                const getServices = await Service.find()
                return response.status(200).json(getServices);
            } catch (error) {
                console.log("Erro ao obter todos os detalhes de serviços", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getService = await Service.findOne({ _id: request.params.id })
                return response.status(200).json(getService);
            } catch (error) {
                console.log("Erro ao obter o detalhe do serviço", error)
                return response.status(400).json({ error });
            }
        }
    },
    
    async updateService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que atualiza um serviço"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "id": "ObjectId()",
                    "title": "Instalação de Internet",
                    "value": 120
                }
            }
            #swagger.responses[200] = {
                schema: {

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

        if (request.params.key === "id") {
            try {
                const updateService = await Service.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updateService);
            } catch (error) {
                console.log("Erro ao atualizar o serviço da coleção Service", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateService = await Service.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateService);
        } catch (error) {
            console.log("Erro ao atualizar o serviço da coleção Service", error);
            return response.status(400).json({ error });
        }
    },
    
    async deleteService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que deleta um serviço"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de32089111a0f8184540fd",
                    "process": "64de31819111a0f8184540fb",
                    "title": "Instalação de Internet",
                    "value": 120,
                    "createdAt": "2023-08-17T14:43:20.569Z",
                    "updatedAt": "2023-08-17T14:43:20.569Z",
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
            const deleteService = await Service.findOneAndDelete({ _id: request.params.id})
            return response.status(200).json(deleteService)
        } catch (error) {
            console.log("Erro ao deletar o serviço da coleção Service", error);
            return response.status(400).json({ error })
        }
    },
    
}