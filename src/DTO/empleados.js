import { param,body } from "express-validator";

export const empleadosDtoId = [
    param('dni').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El dni debe ser un numero')
]

export const empleadosDtoPost = [
    body('dni').notEmpty().isNumeric().not().isString().withMessage('emp_dni es requerido y debe ser un número entero'),
    body('primerNombre').notEmpty().isString().withMessage('primerNombre es requerido y debe ser un string'),
    body('segundoNombre').notEmpty().optional().isString().withMessage('segundoNombre debe ser un string'),
    body('primerApellido').notEmpty().isString().withMessage('primerApellido es requerido y debe ser un string'),
    body('segundoApellido').notEmpty().optional().isString().withMessage('segundoApellido debe ser un string'),
    body('telefono').notEmpty().isNumeric().withMessage('telefono es requerido y solo puede contener números'),
    body('email').notEmpty().isEmail().withMessage('email es requerido y debe ser una direccion de correo valido'),
    body('password').notEmpty().isString().withMessage('password es requerido y debe ser un string'),
    body('fecha_nac').notEmpty().isISO8601().withMessage('fecha_nac es requerido y debe ser una fecha valida'),
    body('genero').notEmpty().isString().withMessage('genero es requerido y debe ser [`Masculino`, `Femenino`, `Otro`]'),
    body('tipo').notEmpty().isString().withMessage('tipo es requerido y debe ser [Vdo, Grte, Admin]')
]

export const empleadosDtoPut = [
    body('telefono-empleado').notEmpty().isNumeric().withMessage('telefono es requerido y solo puede contener números')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('estado-empleado').notEmpty().isString().withMessage('estado es requerido y debe ser [`Activo`, `Inactivo`]')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El estado debe ser un string'),
    body('tipo-empleado').notEmpty().isString().withMessage('tipo es requerido y debe ser [Vendedor, Gerente]')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El tipo debe ser un string')
]