import express from 'express';
// import { User } from 'types';
import { ValidationError, validationResult } from 'express-validator';
import { formatError } from '../../util/formatter_util';

// const checkAdminPrivileges = (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     const loggedUser: User = req.user as User;
//     if (loggedUser.type !== 'ADMIN') {
//         // 401 Unauthorized
//         res.status(401).send('No posee los privilegios necesarios para realizar esta operación.');
//     } else {
//         next();
//     }
// };

// const checkPrivileges = (roles: string[]) => {
//     return (req: express.Request, res: express.Response, next: express.NextFunction) => {
//         const loggedUser: User = req.user as User;
//         if (!roles.includes(loggedUser.type)) {
//             // 401 Unauthorized
//             res.status(401).send('No posee los privilegios necesarios para realizar esta operación.');
//         } else {
//             next();
//         }
//     };
// };

/**
 * Procedure that checks if there were errors earlier in the call chain and sends them to the caller
 * @param req request object where the data passed from the called is stored
 * @param res response object used to answer API call
 * @param next function used to continue the call chain
 */
const checkValidation = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const result: ValidationError[] = validationResult(req).array();
    if (result.length !== 0) {
        console.log(result);
        res.status(400).send(formatError(result[0].msg));
    } else {
        next();
    }
};

export {
    // checkAdminPrivileges,
    // checkPrivileges,
    checkValidation
};