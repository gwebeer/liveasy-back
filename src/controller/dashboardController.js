const Dashboard = require("../models/dashboardModel");

module.exports = {
    
    async createDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que cria um novo Dashboard"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/DashboardSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "process": "64dc0f8167f66149a8d49f97",
                    "user": "64da742da876e905b9b149a2",
                    "_id": "64de7155956dcb624aca8b36",
                    "createdAt": "2023-08-17T19:13:25.415Z",
                    "updatedAt": "2023-08-17T19:13:25.415Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "errors": { },
                        "_message": "ErrorMessageExample",
                        "name": "ExampleError",
                        "message": "ErrorMessageExample: some message error here"
                    }
                }
            }
        */
        try {
            const createDashboard = await Dashboard.create(request.body);
            return response.status(201).json(createDashboard);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que busca um ou vários Dashboards"
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64de7198956dcb624aca8b38",
                    "process": "64dc0f8167f66149a8d49f97",
                    "user": "64da742da876e905b9b149a2",
                    "createdAt": "2023-08-17T19:14:32.358Z",
                    "updatedAt": "2023-08-17T19:14:32.358Z",
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
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getDashboard = await Dashboard.find()
                return response.status(200).json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter todos os Dashboards", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getDashboard = await Dashboard.findOne({ _id: request.params.id })
                return response.status(200).json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter os detalhes do Dashboard", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que atualiza um Dashboard"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    
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
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        if (request.params.key === "id") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateDashboard = await Dashboard.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateDashboard);
        } catch (error) {
            console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
            return response.status(400).json({ error });
        }
    },

    async deleteDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que deleta um Dashboard"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de7198956dcb624aca8b38",
                    "process": "64dc0f8167f66149a8d49f97",
                    "user": "64da742da876e905b9b149a2",
                    "createdAt": "2023-08-17T19:14:32.358Z",
                    "updatedAt": "2023-08-17T19:14:32.358Z",
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
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        try {
            const deleteDashboard = await Dashboard.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteDashboard);
        } catch (error) {
            console.log("Erro ao deletar o Dashboard na coleção Dashboard", error);
            return response.status(400).json({ error });
        }
    },

}