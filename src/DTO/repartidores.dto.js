import { param } from 'express-validator';

export const repartidoresDtoId = [
    param('id').notEmpty().isNumeric().withMessage('El id debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El id debe ser un numero')
]