const Calendar = require("../models/calendarModel");

module.exports = {
    
    async createCalendar(request, response) {
        /* 
            #swagger.tags = ["calendarController"]
            #swagger.description = "Description here..."
        */
        try {
            const createCalendar = await Calendar.create(request.body);
            return response.status(201).json({ createCalendar });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getCalendar(request, response) {
        /* 
            #swagger.tags = ["calendarController"]
            #swagger.description = "Description here..."
        */
        try {
            const getCalendar = await Calendar.findOne({ _id: request.params.id })
            return response.json(getCalendar);
        } catch (error) {
            console.log("Erro ao obter o evento do calendário", error)
            return response.status(400).json({ error });
        }
    },

    async getCalendars(request, response) {
        /* 
            #swagger.tags = ["calendarController"]
            #swagger.description = "Description here..."
        */
        try {
            const getCalendars = await Calendar.find()
            return response.json(getCalendars);
        } catch (error) {
            console.log("Erro ao obter todos os eventos do calendário", error)
            return response.status(400).json({ error });
        }
    },

    async updateCalendar(request, response) {
        /* 
            #swagger.tags = ["calendarController"]
            #swagger.description = "Description here..."
        */
        if (request.params.key === "id") {
            try {
                const updateCalendar = await Calendar.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updateCalendar);
            } catch (error) {
                console.log("Erro ao atualizar item de calendário na coleção Calendar", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateCalendar = await Calendar.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updateCalendar);
            } catch (error) {
                console.log("Erro ao atualizar o item de calendário da coleção Calendar", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateCalendar = await Calendar.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updateCalendar);
        } catch (error) {
            console.log("Erro ao atualizar item de calendário da coleção Calendar", error)
            return response.status(400).json({ error });
        }
    },

    async deleteCalendar(request, response) {
        /* 
            #swagger.tags = ["calendarController"]
            #swagger.description = "Description here..."
        */
        try {
            const deleteCalendar = await Calendar.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteCalendar);
        } catch (error) {
            console.log("Erro ao deletar item de calendário da coleção Calendar", error);
            return response.status(400).json({ error });
        }
    },

}