import { check } from "express-validator";

export const validateDTOcliente = [
    check('cli_dni').notEmpty().isNumeric().not().isString().withMessage('dni requerido. debe ser un número'),
    check('cli_primerNombre').notEmpty().isString().withMessage('primerNombre es requerido y debe ser un string'),
    check('cli_segundoNombre').notEmpty().optional().isString().withMessage('segundoNombre debe ser un string'),
    check('cli_primerApellido').notEmpty().isString().withMessage('primerApellido es requerido y debe ser un string'),
    check('cli_segundoApellido').notEmpty().optional().isString().withMessage('segundoApellido debe ser un string'),
    check('cli_telefono').notEmpty().isNumeric().withMessage('telefono es requerido y solo puede contener numeros'),
    check('cli_email').notEmpty().isEmail().withMessage('email es requerido y debe ser una direccion de correo valido'),
    check('cli_fecha_nac').notEmpty().isISO8601().withMessage('fecha_nac es requerido y debe ser una fecha valida'),
    check('cli_genero').notEmpty().isString().withMessage('genero es requerido y debe ser [`Masculino`, `Femenino`, `Otro`]')
]