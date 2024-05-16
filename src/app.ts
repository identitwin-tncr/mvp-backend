import express from 'express';
import cors from 'cors';
import session from 'express-session';

import userRouter from './lib/routes/user_routes';
import unprotectedRouter from './lib/routes/unprotected_routes';

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
app.use('/users', userRouter);

export default app;
