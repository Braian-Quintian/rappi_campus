import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();

export const empleadosV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let result = await db.collection('empleados').aggregate([
            {
                $project: {
                    _id: 0
                }
            }
        ]);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const empleadosV1Id = async (req, res) => {

}
export const empleadosV1_1 = async (req, res) => {
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