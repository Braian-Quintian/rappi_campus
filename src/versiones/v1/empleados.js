import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();

export const empleadosV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('empleados').aggregate([
            {
                $project: {
                    _id: 0,
                    "dni-empleado": "$emp_dni",
                    "primer-nombre-empleado": "$emp_primerNombre",
                    "primer-apellido-empleado": "$emp_primerApellido",
                    "telefono-empleado": "$emp_telefono",
                    "correo-empleado": "$emp_email",
                    "fecha-nacimiento-empleado": "$emp_fecha_nac",
                    "genero-empleado": "$emp_genero",
                    "tipo-empleado": "$emp_tipo",
                    "restaurante-empleado": "$emp_codigo_restaurante"
                }
            }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const empleadosV1Id = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const result = await db.collection('empleados').findOne(
            { emp_dni: parseInt(req.params.dni) },
            {
                projection: {
                    _id: 0,
                    "dni-empleado": "$emp_dni",
                    "primer-nombre-empleado": "$emp_primerNombre",
                    "primer-apellido-empleado": "$emp_primerApellido",
                    "telefono-empleado": "$emp_telefono",
                    "correo-empleado": "$emp_email",
                    "estado-empleado": "$emp_estado",
                    "fecha-nacimiento-empleado": "$emp_fecha_nac",
                    "genero-empleado": "$emp_genero",
                    "tipo-empleado": "$emp_tipo",
                    "restaurante-empleado": "$emp_codigo_restaurante"
                },
            }
        );
        if (!result) return res.status(404).json({ message: 'No se encontró el empleado' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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

export const empleadosV1_11 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const empleadoId = parseInt(req.params.dni);
        const updatedData = {
            emp_telefono: req.body["telefono-empleado"],
            emp_estado: req.body["estado-empleado"],
            emp_tipo: req.body["tipo-empleado"]
        }
        const result = await db.collection('empleados').updateOne(
            { emp_dni: empleadoId },
            { $set: updatedData }
          );
          if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No se encontró el empleado' });
          }
          res.status(200).json({ message: 'El empleado se ha actualizado exitosamente' });
    } catch (error) {
        res.send(error);
    }
}