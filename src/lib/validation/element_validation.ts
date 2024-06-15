import { body, param, query } from 'express-validator';
import { checkValidation } from '../middlewares/custom.mw';
import {paginationValidation} from "./common_validation";

/**
 * Function that returns the validator chains of a desired function
 * @param procedure name of the function to validate
 * @return list of validator chains
 */
const choseValidationChain = (procedure: string) => {
    switch (procedure) {
        case 'retrieveElementList': {
            return [
                ...paginationValidation(),
                query('blockId', 'Debe seleccionar un bloque válido')
                    .optional()
                    .isInt({min: 1}),
                query('technologicalUnitId', 'Debe seleccionar una unidad tecnológica válida')
                    .optional()
                    .isInt({min: 1})
            ];
        }
        case 'addElement': {
            return [
                body('code', 'Debe ingresar un código único para el elemento')
                    .notEmpty(),
                body('number', 'Debe ingresar un número de elemento mayor o igual a 1')
                    .if(body('orientationId').notEmpty())
                    .notEmpty()
                    .isInt({min: 1}),
                body('orientationId', 'Debe seleccionar un tipo de orientación')
                    .if(body('number').notEmpty())
                    .notEmpty()
                    .isInt({min: 1}),
                body('cardinalPointId', 'Debe seleccionar un punto cardinal válido')
                    .optional()
                    .isInt({min: 1}),
                body('elementTypeId', 'Debe seleccionar un tipo de elemento')
                    .notEmpty()
                    .isInt({min: 1}),
                body('blockIds', 'Debe seleccionar al menos un bloque asociado al elemeneto')
                    .notEmpty()
                    .isArray({min: 1}),
                body('blockIds.*', 'El identificador de cada bloque debe ser un entero mayor a 1')
                    .notEmpty()
                    .isInt({min: 1})
            ]
        }
    }
};

/**
 * Function that returns the validator chains needed and the handler that formats error if any
 * @param procedure name of the function to validate
 * @return list of validator chains
 */
const validate = (procedure: string) => {
    return [...choseValidationChain(procedure), checkValidation];
};

export default validate;