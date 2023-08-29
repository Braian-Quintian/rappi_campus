import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();
const restaurante = db.collection('restaurante');

export const postRestaurante = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors);
        let result = await restaurante.insertOne(req.body);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const getRestautantes = async (req, res) => {
    try {
        let result = await restaurante.find({}).toArray();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const putRestautantes = async (req, res) => {
    try {
        let result = await restaurante.updateOne({ "res_nit": parseInt(req.params.nit) }, { "$set": req.body });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

export const deleteRestaurante = async (req, res) => {
    try {
        let result = await restaurante.deleteOne({ "res_nit": parseInt(req.params.nit) })
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}