import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();
const empleados = db.collection('empleados');

export const postEmpleado = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);

        const empleadoData = {
            emp_dni: req.body.dni,
            emp_primerNombre: req.body.primerNombre,
            emp_primerApellido: req.body.primerApellido,
            emp_telefono: req.body.telefono,
            emp_email: req.body.email,
            emp_password: req.body.password,
            emp_fecha_nac: new Date(req.body.fecha_nac),
            emp_genero: req.body.genero,
            emp_tipo: req.body.tipo
        };

        let result = await empleados.insertOne(empleadoData);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const getEmpleados = async (req, res) => {
    try {
        let result = await empleados.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const putEmpleado = async (req, res) => {
    try {
        const empleadoData = {
            emp_primerNombre: req.body.primerNombre,
            emp_primerApellido: req.body.primerApellido,
            emp_telefono: req.body.telefono,
            emp_email: req.body.email,
            emp_password: req.body.password,
            emp_fecha_nac: new Date(req.body.fecha_nac),
            emp_genero: req.body.genero,
            emp_tipo: req.body.tipo
        };
        let result = await empleados.updateOne({ "emp_dni": parseInt(req.params.dni) }, { "$set": empleadoData })
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const deleteEmpleado = async (req, res) => {
    try {
        let result = await empleados.deleteOne({ "emp_dni": parseInt(req.params.dni) })
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}