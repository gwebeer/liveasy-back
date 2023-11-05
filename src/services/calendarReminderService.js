import CalendarReminderModel from "../models/calendarReminderModel.js";

export default class CalendarReminderService {

    async createCalendarReminder(data) {
        if (data.hasOwnProperty("end")) {
            const initialDate = Date.parse(data.start);
            const finalDate = Date.parse(data.end);

            if (finalDate >= initialDate) {
                const createCalendarReminder = await CalendarReminderModel.create(data);
                return createCalendarReminder;
            } else {
                throw Error("A data final deve ser maior que a data inicial.")
            }
        } 
        if (title.length === "") {
            throw Error("Não é possível criar um lembrete sem nome.")
        }
        const createCalendarReminder = await CalendarReminderModel.create(data);
        return createCalendarReminder;
    }

    async getCalendarReminder(data) {
        try {
            const getCalendarReminders = await CalendarReminderModel.find({ _id: data.id });
            return getCalendarReminders;
        } catch (error) {
            throw Error('Houve problema ao buscar os lembretes do calendário.');
        }
    }

    async updateCalendarReminder(data) {
        const updateCalendarReminder = await CalendarReminderModel.findOneAndUpdate({ _id : data.id }, data);

        let infoCompare = {
            start: updateCalendarReminder.start == data.start,
            end: updateCalendarReminder.end == data.end,
            title: updateCalendarReminder.title == data.title,
            allDay: updateCalendarReminder.allDay == data.allDay 
        }
        if (!Object.values(infoCompare).includes(false)) {
            return [updateCalendarReminder, false]
        }
        return [updateCalendarReminder, true];
    }

    async deleteCalendarReminder(data) {
        const deleteCalendarReminder = await CalendarReminderModel.findOneAndDelete({ _id: data.id });
        return deleteCalendarReminder;
    }

}