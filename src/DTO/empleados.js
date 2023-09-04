import { param,body } from "express-validator";

export const empleadosDtoId = [
    param('dni').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El dni debe ser un numero')
]

export const empleadosDtoPost = [
    body('dni-empleado').notEmpty().isNumeric().withMessage('dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('nombre-empleado').notEmpty().isString().withMessage('nombre es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('segNombre-empleado').notEmpty().optional().isString().withMessage('segundo nombre debe ser un string')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('apellido-empleado').notEmpty().isString().withMessage('El apellido es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El apellido debe ser un string'),
    body('segApellido-empleado').notEmpty().optional().isString().withMessage('segundo apellido debe ser un string'),
    body('telefono-empleado').notEmpty().isNumeric().withMessage('telefono es requerido')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('correo-empleado').notEmpty().isEmail().withMessage('El correo debe ser un email valido y es requerido'),
    body('contraseña-empleado').notEmpty().isString().withMessage('La contraseña es requerida')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('La contraseña debe ser un string'),
    body('cumpleaños-empleado').notEmpty().isISO8601().withMessage('El cumpleaños es requerido')
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('El cumpleaños debe tener el formato YYYY-MM-DD'),
    body('genero-empleado').notEmpty().withMessage('El género es obligatorio')
    .isIn(['Masculino', 'Femenino', 'Otro']).withMessage('El género debe ser Masculino, Femenino u Otro'),
    body('tipo-empleado').notEmpty().isString().withMessage('tipo de empleado es requerido')
    .isIn(['Vendedor', 'Gerente', 'Admin']).withMessage('El tipo debe ser Vendedor, Gerente')
]

export const empleadosDtoPut = [
    body('telefono-empleado').notEmpty().isNumeric().withMessage('telefono es requerido y solo puede contener números')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('estado-empleado').notEmpty().isString().withMessage('estado es requerido y debe ser [`Activo`, `Inactivo`]')
    .isIn(['Activo', 'Inactivo']).withMessage('El estado debe ser Activo o Inactivo'),
    body('tipo-empleado').notEmpty().isString().withMessage('tipo es requerido y debe ser [Vendedor, Gerente]')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El tipo debe ser un string')
]