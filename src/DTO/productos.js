import { body, param } from "express-validator";

export const productosDtoId = [
    param('id').notEmpty().isNumeric().withMessage('El id es requerido')
    .matches(/^[0-9]+$/).withMessage('El id debe ser un numero')
]

export const productosDtoPost = [
    body('id-producto').notEmpty().isNumeric().withMessage('El dni es requerido')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('nombre-producto').notEmpty().isString().withMessage('El nombre es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('precio-producto').notEmpty().isString().withMessage('El precio es requerido')
    .matches(/^\d+(\.\d{2})?$/).withMessage('El precio debe ser un numero'),
    body('descripcion-producto').notEmpty().isString().withMessage('La descripcion es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('La descripcion debe ser un string'),
    body('categoria-producto').notEmpty().isString().withMessage('La categoria es requerida')
    .isIn(['Desayuno', 'Almuerzo', 'Cena', 'Postre']).withMessage('La categoria debe ser Desayuno, Almuerzo, Cena o Postre'),
    body('nombre-producto').notEmpty().isString().withMessage('El restaurante es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El restaurante debe ser un string'),
    body('imagen-producto').notEmpty().isString().withMessage('La imagen es requerida')
]

export const productosDtoPut = [
    param('id').notEmpty().isNumeric().withMessage('El id es requerido')
    .matches(/^[0-9]+$/).withMessage('El id debe ser un numero'),
    body('nombre-producto').notEmpty().isString().withMessage('El nombre es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('precio-producto').notEmpty().isString().withMessage('El precio es requerido')
    .matches(/^\d+(\.\d{2})?$/).withMessage('El precio debe ser un numero'),
    body('descripcion-producto').notEmpty().isString().withMessage('La descripcion es requerido')
    .matches(/^[a-zA-Z ]+$/).withMessage('La descripcion debe ser un string'),
]