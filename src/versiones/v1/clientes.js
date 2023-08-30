import { validationResult } from "express-validator";
import { connect } from "../../connection/connection.js";
import bcrypt from "bcrypt";
const db = await connect();

export const clientesV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('clientes').aggregate([
            {
                $project: {
                    _id: 0,
                    "cliente-dni": "$cli_dni",
                    "cliente-nombre": "$cli_primerNombre",
                    "cliente-apellido": "$cli_primerApellido",
                    "cliente-telefono": "$cli_telefono",
                    "cliente-email": "$cli_email",
                    "cliente-fecha-nacimiento": "$cli_fecha_nac",
                    "cliente-genero": "$cli_genero"
                }
            }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const clientesV1Id = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const result = await db.collection('clientes').findOne(
            { cli_dni: parseInt(req.params.dni) },
            {
                projection: {
                    _id: 0,
                    "cliente-dni": "$cli_dni",
                    "cliente-nombre": "$cli_primerNombre",
                    "cliente-apellido": "$cli_primerApellido",
                    "cliente-telefono": "$cli_telefono",
                    "cliente-email": "$cli_email",
                    "cliente-fecha-nacimiento": "$cli_fecha_nac",
                    "cliente-genero": "$cli_genero"
                },
            }
        );
        if (!result) return res.status(404).json({ message: 'No se encontró el cliente' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const clientesV1_1 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const cryptPass = await bcrypt.hash(req.body["contraseña-cliente"], 10);
        const dataSend = {
            cli_dni: parseInt(req.body["dni-cliente"]),
            cli_primerNombre: req.body["nombre-cliente"],
            cli_primerApellido: req.body["apellido-cliente"],
            cli_telefono: req.body["telefono-cliente"],
            cli_email: req.body["correo-cliente"],
            cli_password: cryptPass,
            cli_fecha_nac: new Date(req.body["cumpleaños-cliente"]),
            cli_genero: req.body["genero-cliente"],
            cli_permisos: {
                "/clientes": ["1.0.2"],
                "/detalle": ["1.0.1"]
            }
        };
        await db.collection('clientes').insertOne(dataSend);
        res.status(200).json({ message: 'El cliente ha sido creado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const clientesv1_11 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const clienteId = parseInt(req.params.dni);
        const updatedData = {
            cli_telefono: req.body["telefono-cliente"],
            cli_estado: req.body["estado-cliente"],
        };
        const result = await db.collection('clientes').updateOne(
            { cli_dni: clienteId },
            { $set: updatedData }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No se encontró el cliente' });
        }
        res.status(200).json({ message: 'Cliente actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};