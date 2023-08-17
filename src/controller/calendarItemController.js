const CalendarItem = require("../models/calendarItemModel");

module.exports = {
    
    async createCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que cria um novo item no calendário"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/CalendarItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "64da742da876e905b9b149a2",
                    "service": "64dc0f8167f66149a8d49f97",
                    "initialDate": "2023-07-21",
                    "finalDate": "2023-08-21",
                    "repeat": true,
                    "repeatEvery": 30,
                    "_id": "64de7268956dcb624aca8b41",
                    "createdAt": "2023-08-17T19:18:00.795Z",
                    "updatedAt": "2023-08-17T19:18:00.795Z",
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
            const createCalendarItem = await CalendarItem.create(request.body);
            return response.status(201).json(createCalendarItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que pega um ou vários itens do calendário."
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64de7268956dcb624aca8b41",
                    "user": "64da742da876e905b9b149a2",
                    "service": "64dc0f8167f66149a8d49f97",
                    "initialDate": "2023-07-21",
                    "finalDate": "2023-08-21",
                    "repeat": true,
                    "repeatEvery": 30,
                    "createdAt": "2023-08-17T19:18:00.795Z",
                    "updatedAt": "2023-08-17T19:18:00.795Z",
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
                const getCalendarItems = await CalendarItem.find()
                return response.status(200).json(getCalendarItems);
            } catch (error) {
                console.log("Erro ao obter todos os eventos do calendário", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCalendarItem = await CalendarItem.findOne({ _id: request.params.id })
                return response.status(200).json(getCalendarItem);
            } catch (error) {
                console.log("Erro ao obter o evento do calendário", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que atualiza o item do calendário."
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
                const updateCalendarItem = await CalendarItem.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updateCalendarItem);
            } catch (error) {
                console.log("Erro ao atualizar item de calendário na coleção CalendarItem", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateCalendarItem = await CalendarItem.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updateCalendarItem);
            } catch (error) {
                console.log("Erro ao atualizar o item de calendário da coleção CalendarItem", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateCalendarItem = await CalendarItem.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateCalendarItem);
        } catch (error) {
            console.log("Erro ao atualizar item de calendário da coleção CalendarItem", error)
            return response.status(400).json({ error });
        }
    },

    async deleteCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que deleta um item do calendário"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de7268956dcb624aca8b41",
                    "user": "64da742da876e905b9b149a2",
                    "service": "64dc0f8167f66149a8d49f97",
                    "initialDate": "2023-07-21",
                    "finalDate": "2023-08-21",
                    "repeat": true,
                    "repeatEvery": 30,
                    "createdAt": "2023-08-17T19:18:00.795Z",
                    "updatedAt": "2023-08-17T19:18:00.795Z",
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
            const deleteCalendarItem = await CalendarItem.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteCalendarItem);
        } catch (error) {
            console.log("Erro ao deletar item de calendário da coleção CalendarItem", error);
            return response.status(400).json({ error });
        }
    },

}