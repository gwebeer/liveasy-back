const CalendarItem = require("../models/calendarItemModel");

module.exports = {
    
    async createCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que cria um novo item no calendário"
        */
        try {
            const createCalendarItem = await CalendarItem.create(request.body);
            return response.status(201).json({ createCalendarItem });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que pega um ou vários itens do calendário."
        */
        if (request.params.id == "all") {
                try {
                const getCalendarItem = await CalendarItem.findOne({ _id: request.params.id })
                return response.json(getCalendarItem);
            } catch (error) {
                console.log("Erro ao obter o evento do calendário", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCalendarItems = await CalendarItem.find()
                return response.json(getCalendarItems);
            } catch (error) {
                console.log("Erro ao obter todos os eventos do calendário", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que atualiza o item do calendário."
        */
        if (request.params.key === "id") {
            try {
                const updateCalendarItem = await CalendarItem.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updateCalendarItem);
            } catch (error) {
                console.log("Erro ao atualizar item de calendário na coleção CalendarItem", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateCalendarItem = await CalendarItem.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updateCalendarItem);
            } catch (error) {
                console.log("Erro ao atualizar o item de calendário da coleção CalendarItem", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateCalendarItem = await CalendarItem.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updateCalendarItem);
        } catch (error) {
            console.log("Erro ao atualizar item de calendário da coleção CalendarItem", error)
            return response.status(400).json({ error });
        }
    },

    async deleteCalendarItem(request, response) {
        /* 
            #swagger.tags = ["calendarItemController"]
            #swagger.description = "Função que deleta um item do calendário"
        */
        try {
            const deleteCalendarItem = await CalendarItem.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteCalendarItem);
        } catch (error) {
            console.log("Erro ao deletar item de calendário da coleção CalendarItem", error);
            return response.status(400).json({ error });
        }
    },

}