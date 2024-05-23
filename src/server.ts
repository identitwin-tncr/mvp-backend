require('dotenv').config();

const { API_PORT } = process.env;

import app from './app';

/**
 * Server's general information
 */
const serverInfo = `
    =======================================
    IDENTITWIN Backend Server is running
    Version: v1.0.0
    Port: ${API_PORT}
    Environment: ${process.env.NODE_ENV || 'development'}
    =======================================
    
    Press Ctrl+C to stop server.
`;

/**
 * Start server
 */
const server = app.listen(app.get('port'), async () => {
    console.log(serverInfo);
});

export default server;
