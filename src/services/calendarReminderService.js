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
        if (data.id == "all") {
            try {
                const getCalendarReminders = await CalendarReminderModel.find();
                return getCalendarReminders;
            } catch (error) {
                throw Error('Houve problema ao buscar os lembretes do calendário.');
            }
        } else {
            try {
                const getCalendarReminder = await CalendarReminderModel.findOne({ _id: data.id });
                return getCalendarReminder;
            } catch (error) {
                throw Error('Houve problema ao buscar o lembrete do calendário.');
            }
        }
    }

    async updateCalendarReminder(data) {
        const updateCalendarReminder = await CalendarReminderModel.findOneAndUpdate({ _id : data.id }, data);

        let infoCompare = {
            initialDate: updateCalendarReminder.initialDate == data.initialDate,
            finalDate: updateCalendarReminder.finalDate == data.finalDate,
            repeat: updateCalendarReminder.repeat == data.repeat,
            repeatEvery: updateCalendarReminder.repeatEvery == data.repeatEvery 
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