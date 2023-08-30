import { validationResult } from "express-validator";
import { connect } from "../../connection/connection.js";
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
}

export const clientesV1Id = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const result = await db.collection('clientes').findOne(
            { rep_dni: parseInt(req.params.id) },
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
        if (!result) return res.status(404).json({ message: 'No se encontró el repartidor' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const postCliente = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);

        const clienteData = {
            cli_dni: req.body.cli_dni,
            cli_primerNombre: req.body.cli_primerNombre,
            cli_primerApellido: req.body.cli_primerApellido,
            cli_telefono: req.body.cli_telefono,
            cli_email: req.body.cli_email,
            cli_fecha_nac: new Date(req.body.cli_fecha_nac),
            cli_genero: req.body.cli_genero,
        };

        let result = await clientes.insertOne(clienteData);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const putCliente = async (req, res) => {
    try {
        const clienteData = {
            cli_primerNombre: req.body.cli_primerNombre,
            cli_primerApellido: req.body.cli_primerApellido,
            cli_telefono: req.body.cli_telefono,
            cli_email: req.body.cli_email,
            cli_fecha_nac: new Date(req.body.cli_fecha_nac),
            cli_genero: req.body.cli_genero,
        };
        let result = await clientes.updateOne({ cli_dni: parseInt(req.params.dni) }, { "$set": clienteData });
        console.log(result);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}