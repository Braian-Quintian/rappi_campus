import { check } from "express-validator";

export const validateDTORestaurante = [
    check('res_nit').notEmpty().isNumeric().not().isString().withMessage('res_nit es requerido y debe ser un número entero'),
    check('res_nombre').notEmpty().isString().withMessage('res_nombre es requerido y debe ser un string'),
    check('res_direccion').notEmpty().isString().withMessage('res_direccion es requerido y debe ser un string'),
    check('res_telefono').notEmpty().isString().matches("^[0-9]+$").withMessage('res_telefono es requerido y solo debe contener números'),
    check('res_categoria').notEmpty().isString().withMessage('res_categoria es requerido y debe ser un string'),
]