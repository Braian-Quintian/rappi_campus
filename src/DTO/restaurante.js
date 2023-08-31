import { param,body } from "express-validator";

export const restaurantesDtoId = [
    param('nombre').notEmpty().isString().withMessage('El nombre es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El nombre debe ser un string')
]

export const restaurantesDtoPost = [
    body('nit-restaurante').notEmpty().isNumeric().not().isString().withMessage('El nit es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El nit debe ser un numero'),
    body('nombre-restaurante').notEmpty().isString().withMessage('El nombre del restaurante es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El nombre debe ser un string'),
    body('correo-restaurante').notEmpty().isEmail().withMessage('El correo debe ser un email y es requerido'),
    body('contraseña-restaurante').notEmpty().isString().withMessage('La contraseña es requerida')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('La contraseña debe ser un string'),
    body('direccion-restaurante').notEmpty().isString().withMessage('La dirección es requerida')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('La dirección debe ser un string'),
    body('telefono-restaurante').notEmpty().isNumeric().withMessage('El telefono es requerido')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('categoria-restaurante').notEmpty().isString().withMessage('La categoria es requerida')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('La categoria debe ser un string'),
    body('hora-apertura').notEmpty().withMessage('La hora de apertura es requerida')
    .matches(/^\d{2}:\d{2}$/).withMessage('La hora de apertura debe tener el formato HH:MM'),
    body('hora-cierre').notEmpty().withMessage('La hora de cierre es requerida')
    .matches(/^\d{2}:\d{2}$/).withMessage('La hora de cierre debe tener el formato HH:MM'),
]

export const restaurantesDtoPut = [
    param('nit').notEmpty().isNumeric().withMessage('El nit es requerido')
    .matches(/^[a-zA-Z0-9 ]+$/).withMessage('El nit debe ser un numero'),
    body('telefono-restaurante').notEmpty().isNumeric().withMessage('El telefono es requerido')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('hora-apertura').notEmpty().withMessage('La hora de apertura es requerida')
    .matches(/^\d{2}:\d{2}$/).withMessage('La hora de apertura debe tener el formato HH:MM'),
    body('hora-cierre').notEmpty().withMessage('La hora de cierre es requerida')
    .matches(/^\d{2}:\d{2}$/).withMessage('La hora de cierre debe tener el formato HH:MM'),
]