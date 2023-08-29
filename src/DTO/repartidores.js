import { param, body } from 'express-validator';

export const repartidoresDtoId = [
    param('id').notEmpty().isNumeric().withMessage('El id debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El id debe ser un numero')
]

export const repartidoresDtoPost = [
    body('dni-repartidor').notEmpty().isNumeric().withMessage('El dni debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('nombre-repartidor').notEmpty().isString().withMessage('El nombre debe ser un string')
    .matches(/^[a-zA-Z ]+$/).withMessage('El nombre debe ser un string'),
    body('apellido-repartidor').notEmpty().isString().withMessage('El apellido debe ser un string')
    .matches(/^[a-zA-Z ]+$/).withMessage('El apellido debe ser un string'),
    body('telefono-repartidor').notEmpty().isNumeric().withMessage('El telefono debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El telefono debe ser un numero'),
    body('correo-repartidor').notEmpty().isEmail().withMessage('El correo debe ser un email'),
    body('contraseña-repartidor').notEmpty().isString().withMessage('La contraseña debe ser un string')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('La contraseña debe ser un string'),
    body('cumpleaños-repartidor').notEmpty().withMessage('El cumpleaños debe ser un string')
    .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('El cumpleaños debe tener el formato YYYY-MM-DD'),
    body('genero-repartidor').notEmpty().withMessage('El género es obligatorio')
    .isIn(['Masculino', 'Femenino', 'Otro']).withMessage('El género debe ser Masculino, Femenino u Otro'),
    body('vehiculo-marca').notEmpty().isString().withMessage('La marca debe ser un string')
    .matches(/^[a-zA-Z]+$/).withMessage('La marca debe ser un string'),
    body('vehiculo-modelo').notEmpty().isString().withMessage('El modelo debe ser un string')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('El modelo debe ser un string'),
    body('vehiculo-placa').notEmpty().isString().withMessage('La placa debe ser un string')
    .matches(/^[a-zA-Z0-9]+$/).withMessage('La placa debe ser un string'),
    body('vehiculo-color').notEmpty().isString().withMessage('El color debe ser un string')
    .matches(/^[a-zA-Z]+$/).withMessage('El color debe ser un string'),
    body('tipo-vehiculo').notEmpty().withMessage('El tipo debe ser un string')
    .isString().withMessage('El tipo debe ser un string')
    .isIn(['Motos', 'Carros', 'Bicicletas', 'otro']).withMessage('El tipo de vehículo debe ser Motos, Carros, Bicicletas u otro')

]

export const repartidoresDtoPut = [
    param('id').notEmpty().isNumeric().withMessage('El id debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El id debe ser un numero'),
    body('telefono-repartidor').notEmpty().isNumeric().withMessage('El dni debe ser un numero')
    .matches(/^[0-9]+$/).withMessage('El dni debe ser un numero'),
    body('estado-repartidor').notEmpty().withMessage('El estado es obligatorio')
    .isIn(['Activo', 'Inactivo']).withMessage('El estado debe ser Activo o Inactivo'),
]