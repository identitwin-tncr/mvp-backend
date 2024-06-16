import express from 'express';
import cors from 'cors';
import session from 'express-session';

import unprotectedRouter from './lib/routes/unprotected_routes';
import catalogRouter from './lib/routes/catalog_routes';
import elementRouter from './lib/routes/elements_routes';
import instrumentRouter from './lib/routes/instruments_routes';
import alarmRouter from './lib/routes/alarms_routes';
import conservationActionRouter from './lib/routes/conservation_actions_routes';
import woundRouter from './lib/routes/wound_routes'

/**
 * Import environmental variables
 */
const { API_PORT, EXPRESS_SESSION_SECRET } = process.env;

/**
 * Create Express server
 */
const app = express();

/**
 * Express configuration
 */
app.set('port', API_PORT);
app.use(cors());
app.use(express.json());
app.use(
    session({
        secret: EXPRESS_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }),
);

/**
 * App routes
 */

app.use(unprotectedRouter);
app.use('/catalog', catalogRouter); //Monitoring variables, Materials
app.use('/elements', elementRouter); //structural, decorative
app.use('/instruments', instrumentRouter); //Datalogger, others.
app.use('/alarm', alarmRouter); //alarm historial
app.use('/conservationAccion', conservationActionRouter); //Conservation actions associated to elements, material and rank
app.use('/wound', woundRouter);

export default app;
