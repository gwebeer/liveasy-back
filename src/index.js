import { fileURLToPath } from 'url';
import { mongoose } from 'mongoose';
import path from 'path';
import express from 'express';
import cors from 'cors';
import SwaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';

import CalendarReminderRoute from './routes/calendarReminderRoute.js';
import ReasonRoute from './routes/reasonRoute.js';
import CostItemListRoute from './routes/costItemListRoute.js';
import IdealPropertyRoute from './routes/idealPropertyRoute.js';
import ItemListRoute from './routes/itemListRoute.js';
import ProcessRoute from './routes/processRoute.js';
import PropertyItemRoute from './routes/propertyItemRoute.js';
import PropertyRoute from './routes/propertyRoute.js';
import SuggestionItemRoute from './routes/suggestionItemRoute.js';
import UserAuthRoute from './routes/userAuthRoute.js';
import UserRoute from './routes/userRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

let envPath;
if (process.env.PRODUCTION) {
    envPath = path.join(__dirname, "..", `.env.prd`);
} else {
    envPath = path.join(__dirname, "..", `.env.dev`);
    app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup('./swagger.json'));
}

dotenv.config({ path: envPath });

// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));

app.use(cors());
app.use(express.json());

app.use(CalendarReminderRoute);
app.use(ReasonRoute);
app.use(CostItemListRoute);
app.use(IdealPropertyRoute);
app.use(ItemListRoute);
app.use(ProcessRoute);
app.use(PropertyItemRoute);
app.use(PropertyRoute);
app.use(SuggestionItemRoute);
app.use(UserAuthRoute);
app.use(UserRoute);

app.listen(process.env.PORT || 3333, () => console.log(`Running Back-end in port ${process.env.PORT}`));