import CalendarReminderModel from "../models/calendarReminderModel.js";

export default class CalendarReminderService {

    async createCalendarReminder(data) {
        const calendarReminderModel = new CalendarReminderModel();

        const calendarReminderExists = await calendarReminderModel.find({
            initialDate: data.initialDate
        });
        if (calendarReminderExists) {
            throw Error('Esse lembrete já está cadastrado.');
        }

        const createCalendarReminder = await calendarReminderModel.create(data);
        return createCalendarReminder;
    }

    async getCalendarReminder(data) {
        const calendarReminderModel = new CalendarReminderModel();

        if (data.id == "all") {
            try {
                const getCalendarReminders = await calendarReminderModel.find();
                return getCalendarReminders;
            } catch (error) {
                throw Error('Houve problema ao buscar os lembretes do calendário.');
            }
        } else {
            try {
                const getCalendarReminder = await calendarReminderModel.findOne({ _id: data.id });
                return getCalendarReminder;
            } catch (error) {
                throw Error('Houve problema ao buscar o lembrete do calendário.');
            }
        }
    }

    async updateCalendarReminder(data) {
        const calendarReminderModel = new CalendarReminderModel();

        const updateCalendarReminder = await calendarReminderModel.findOneAndUpdate({ _id : data.id }, data);
        return updateCalendarReminder;
    }

    async deleteCalendarReminder(data) {
        const calendarReminderModel = new CalendarReminderModel();

        const deleteCalendarReminder = await calendarReminderModel.findOneAndDelete({ _id: data.id });
        return deleteCalendarReminder;
    }

}