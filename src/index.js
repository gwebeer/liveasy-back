const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");
const cors = require('cors');
const routes = require('./routes');
const SwaggerUI = require('swagger-ui-express');
const SwaggerFile = require('./swagger-output.json');

const app = express();
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));

app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerFile));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log("Backend rodando na porta " + process.env.PORT));