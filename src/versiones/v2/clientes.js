import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();
const clientes = db.collection('clientes');

export const getClientes = async (req, res) => {
    try {
        let result = await clientes.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error);
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

export const deleteCliente = async (req, res) => {
    try {
        let result = await clientes.deleteOne({ "cli_dni": parseInt(req.params.dni) })
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}