import { query } from 'express-validator';

const commonQueryRetrieveValidations = () => {
    return [
        query('offset', 'Ingrese un offset numérico para la paginación').notEmpty().isInt(),
        query('limit', 'Ingrese un límite numérico para la paginación').notEmpty().isInt(),
        query('year', 'El valor de año debe ser numérico mayor o igual a 2024').optional().isInt({ min: 2024 }),
        query('semester', 'El valor del semestre debe ser entero entre 1 y 2').optional().isInt({ min: 1, max: 2 }),
    ];
};

const paginationValidation = () => {
    return [
        query('offset', 'Ingrese un offset numérico para la paginación').notEmpty().isInt({
            min: 0,
        }),
        query('limit', 'Ingrese un límite numérico para la paginación').notEmpty().isInt({ min: 1 }),
    ];
};

const optionalPaginationValidation = () => {
    return [
        query('offset', 'Ingrese un offset numérico para la paginación')
            .if(query('limit').notEmpty())
            .notEmpty()
            .isInt({ min: 0 }),
        query('limit', 'Ingrese un límite numérico para la paginación')
            .if(query('offset').notEmpty())
            .notEmpty()
            .isInt({ min: 1 }),
    ];
};

const yearSemesterFiltersValidation = () => {
    return [
        query('year', 'El valor de año debe ser numérico mayor o igual a 2024').optional().isInt({ min: 2024 }),
        query('semester', 'El valor del semestre debe ser entero entre 1 y 2').optional().isInt({ min: 1, max: 2 }),
    ];
};

export {
    commonQueryRetrieveValidations,
    paginationValidation,
    yearSemesterFiltersValidation,
    optionalPaginationValidation,
};