import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();

export const productosV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('productos').aggregate([
            {
                $project: {
                  _id: 0,
                  "pro-id": "$pro_id",
                  "nombre-producto": "$pro_nombre",
                  "precio-producto": "$pro_precio",
                  "descripcion-producto": "$pro_descripcion",
                  "categoria-producto": "$pro_categoria",
                  "restaurante-producto": "$pro_restaurante",
                  "imagen-producto": "$pro_imagen"
                }
              }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const productosV1Id = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const result = await db.collection('productos').findOne(
            { pro_id: parseInt(req.params.id) },
            {
                projection: {
                    _id: 0,
                  "pro-id": "$pro_id",
                  "nombre-producto": "$pro_nombre",
                  "precio-producto": "$pro_precio",
                  "descripcion-producto": "$pro_descripcion",
                  "categoria-producto": "$pro_categoria",
                  "restaurante-producto": "$pro_restaurante",
                  "imagen-producto": "$pro_imagen"
                }
            }
        )
        if (!result) return res.status(404).json({ message: 'No se encontró el cliente' });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const productosV1_1 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const dataSend = {
            pro_id: parseInt(req.body["id-producto"]),
            pro_nombre: req.body["nombre-producto"],
            pro_precio: req.body["precio-producto"],
            pro_descripcion: req.body["descripcion-producto"],
            pro_categoria: req.body["categoria-producto"],
            pro_restaurante: req.body["nombre-producto"],
            pro_imagen: req.body["imagen-producto"]
        }
        await db.collection('productos').insertOne(dataSend);
        res.status(200).json({ message: 'El producto ha sido creado exitosamente.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const productosV1_11 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const productoId = parseInt(req.params.id);
        const updatedData = {
            pro_nombre: req.body["nombre-producto"],
            pro_precio: req.body["precio-producto"],
            pro_descripcion: req.body["descripcion-producto"],
        };
        const result = await db.collection('productos').updateOne(
            { pro_id: productoId },
            { $set: updatedData }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No se encontró el producto' });
        }
        res.status(200).json({ message: 'Producto actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}