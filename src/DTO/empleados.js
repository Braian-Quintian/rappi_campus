import { check } from "express-validator";

export const empleadosDtoId = [
    
]

export const validateDTOEmpleado = [
    check('dni').notEmpty().isNumeric().not().isString().withMessage('emp_dni es requerido y debe ser un número entero'),
    check('primerNombre').notEmpty().isString().withMessage('primerNombre es requerido y debe ser un string'),
    check('segundoNombre').notEmpty().optional().isString().withMessage('segundoNombre debe ser un string'),
    check('primerApellido').notEmpty().isString().withMessage('primerApellido es requerido y debe ser un string'),
    check('segundoApellido').notEmpty().optional().isString().withMessage('segundoApellido debe ser un string'),
    check('telefono').notEmpty().isNumeric().withMessage('telefono es requerido y solo puede contener números'),
    check('email').notEmpty().isEmail().withMessage('email es requerido y debe ser una direccion de correo valido'),
    check('password').notEmpty().isString().withMessage('password es requerido y debe ser un string'),
    check('fecha_nac').notEmpty().isISO8601().withMessage('fecha_nac es requerido y debe ser una fecha valida'),
    check('genero').notEmpty().isString().withMessage('genero es requerido y debe ser [`Masculino`, `Femenino`, `Otro`]'),
    check('tipo').notEmpty().isString().withMessage('tipo es requerido y debe ser [Vdo, Grte, Admin]')
]