const CalendarReminder = require("../models/calendarReminderModel");

module.exports = {
    
    async createCalendarReminder(request, response) {
        /* 
            #swagger.tags = ["calendarReminderController"]
            #swagger.description = "Função que o usuário cria um novo lembrete no calendário."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/CalendarReminderSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "64da742da876e905b9b149a2",
                    "planningcostitem": "ObjectId()",
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
            const createCalendarReminder = await CalendarReminder.create(request.body);
            return response.status(201).json(createCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getCalendarReminder(request, response) {
        /* 
            #swagger.tags = ["calendarReminderController"]
            #swagger.description = "Função que o usuário pega um ou vários itens do calendário."
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64de7268956dcb624aca8b41",
                    "user": "64da742da876e905b9b149a2",
                    "planningcostitem": "ObjectId()",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi(ram) encontrado(s) lembrete(s) no calendário.", 
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getCalendarReminders = await CalendarReminder.find()
                if (getCalendarReminders == null) {
                    return response.status(404).json({ "message": "Não foram encontrados lembretes no calendário.", "_return": getCalendarReminders });
                }
                return response.status(200).json(getCalendarReminders);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCalendarReminder = await CalendarReminder.findOne({ _id: request.params.id })
                if (getCalendarReminder == null) {
                    return response.status(404).json({ "message": "Não foi encontrado lembrete no calendário.", "_return": getCalendarReminder });
                }
                return response.status(200).json(getCalendarReminder);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateCalendarReminder(request, response) {
        /* 
            #swagger.tags = ["calendarReminderController"]
            #swagger.description = "Função que o usuário atualiza o lembrete do calendário."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "initialDate": "2023-07-21",
                    "finalDate": "2023-08-21",
                    "repeat": true,
                    "repeatEvery": 30,
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
        try {
            const updateCalendarReminder = await CalendarReminder.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteCalendarReminder(request, response) {
        /* 
            #swagger.tags = ["calendarReminderController"]
            #swagger.description = "Função que o usuário deleta um lembrete do calendário."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de7268956dcb624aca8b41",
                    "user": "64da742da876e905b9b149a2",
                    "planningcostitem": "ObjectId()",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado lembrete no calendário.", 
                    "_return": "null"
                }
            }
        */
        try {
            const deleteCalendarReminder = await CalendarReminder.findOneAndDelete({ _id: request.params.id });
            if (deleteCalendarReminder == null) {
                return response.status(404).json({ "message": "Não foi encontrado lembrete no calendário.", "_return": deleteCalendarReminder });
            }
            return response.status(200).json(deleteCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}