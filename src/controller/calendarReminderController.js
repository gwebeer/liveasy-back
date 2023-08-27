import CalendarReminder from "../models/calendarReminderModel.js";
import CalendarReminderService from "../services/calendarReminderService.js"

export default class CalendarReminderController {

    async createCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const createdCalendarReminder = await calendarReminderService.createCalendarReminder(request.body);
            return response.status(201).json(createdCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const getCalendarReminder = await calendarReminderService.getCalendarReminder(request.body);
            if (getCalendarReminder == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) lembrete(s) no calendário.", "_return": getCalendarReminder });
            }
            return response.status(200).json(getCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async updateCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const updateCalendarReminder = await calendarReminderService.updateCalendarReminder(request.body);
            return response.status(200).json(updateCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteCalendarReminder(request, response) {
        try {
            const calendarReminderService = new CalendarReminderService();
            const deleteCalendarReminder = await calendarReminderService.deleteCalendarReminder(request.body);
            if (deleteCalendarReminder == null) {
                return response.status(404).json({ "message": "Não foi encontrado lembrete no calendário.", "_return": deleteCalendarReminder });
            }
            return response.status(200).json(deleteCalendarReminder);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }    
}    
