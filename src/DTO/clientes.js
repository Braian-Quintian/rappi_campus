import { body, param } from "express-validator";

export const clientesDtoId = [
    param('dni').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero')
]

export const clientesDtoPost = [
    body('dni-cliente').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('nombre-cliente').notEmpty().isString().withMessage('El nombre es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('apellido-cliente').notEmpty().isString().withMessage('El apellido es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El apellido debe ser un string'),
    body('telefono-cliente').notEmpty().isNumeric().withMessage('El telefono es requerido')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('correo-cliente').notEmpty().isEmail().withMessage('El correo debe ser un email y es requerido'),
    body('contraseña-cliente').notEmpty().isString().withMessage('La contraseña es requerida')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('La contraseña debe ser un string'),
    body('cumpleaños-cliente').notEmpty().withMessage('El cumpleaños es requerido')
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('El cumpleaños debe tener el formato YYYY-MM-DD'),
    body('genero-cliente').notEmpty().withMessage('El género es obligatorio')
    .isIn(['Masculino', 'Femenino', 'Otro']).withMessage('El género debe ser Masculino, Femenino u Otro'),
]

export const clientesDtoPut = [
    param('dni').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('telefono-cliente').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('estado-cliente').notEmpty().withMessage('El estado es obligatorio')
    .isIn(['Activo', 'Inactivo']).withMessage('El estado debe ser Activo o Inactivo'),
]