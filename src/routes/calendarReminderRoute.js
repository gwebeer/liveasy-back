import { Router } from 'express';
import CalendarReminderController from '../controller/calendarReminderController.js';

const routes = Router();

routes.post('/user/calendar/reminder/add', (req, res) => new CalendarReminderController().createCalendarReminder(req, res));    
routes.get('/user/calendar/reminder/:id', (req, res) => new CalendarReminderController().getCalendarReminder(req, res));
routes.put('/user/calendar/reminder/:id', (req, res) => new CalendarReminderController().updateCalendarReminder(req, res));
routes.delete('/user/calendar/reminder/:id', (req, res) => new CalendarReminderController().deleteCalendarReminder(req, res));

export default routes;