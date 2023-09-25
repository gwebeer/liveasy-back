import CalendarReminderService from "../services/calendarReminderService.js"

export default class CalendarReminderController {

    async createCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const createdCalendarReminder = await calendarReminderService.createCalendarReminder(request.body);
            return response.status(201).json(createdCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const getCalendarReminder = await calendarReminderService.getCalendarReminder(request.params);
            if (getCalendarReminder == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) lembrete(s) no calendário.", "_return": getCalendarReminder });
            }
            return response.status(200).json(getCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const updateCalendarReminder = await calendarReminderService.updateCalendarReminder(request.body);
            
            if (updateCalendarReminder[1] == false) {
                return response.status(204).json({ msg: "Nenhum dado foi alterado" });
            }
            return response.status(200).json(updateCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const deleteCalendarReminder = await calendarReminderService.deleteCalendarReminder(request.params);
            if (deleteCalendarReminder == null) {
                return response.status(404).json({ "message": "Não foi encontrado lembrete no calendário.", "_return": deleteCalendarReminder });
            }
            return response.status(200).json(deleteCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }    
}    
