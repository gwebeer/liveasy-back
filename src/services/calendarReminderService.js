import CalendarReminderModel from "../models/calendarReminderModel.js";

export default class CalendarReminderService {

    async createCalendarReminder(data) {
        if (!data.hasOwnProperty("finalDate")) {
            if (data.repeat == true && data.hasOwnProperty("repeatEvery") || 
                data.repeat == false && !data.hasOwnProperty("repeatEvery")) {
                const createCalendarReminder = await CalendarReminderModel.create(data);
                return createCalendarReminder;
            }
            if (data.repeat == true && !data.hasOwnProperty("repeatEvery")) {
                throw Error("Não é possível criar um lembrete com repetição sem indicar suas repetições.");
            }            
            if (data.repeat == false && data.hasOwnProperty("repeatEvery")) {
                throw Error("Não é possível criar um lembrete sem repetição indicando suas repetições.");
            }
            throw Error("Não foi possível criar o lembrete.");
        } 
        const initialDate = Date.parse(data.initialDate);
        const finalDate = Date.parse(data.finalDate);

        if (finalDate > initialDate) {
            const createCalendarReminder = await CalendarReminderModel.create(data);
            return createCalendarReminder;
        } 
        throw Error("A data final deve ser maior que a data inicial.")
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