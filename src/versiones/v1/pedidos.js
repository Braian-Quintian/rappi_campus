import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();

export const pedidosV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('pedidos').aggregate([
            {
                $project: {
                  _id: 0,
                  "pro-id": "$pro_id",
                  "nombre-producto": "$pro_nombre",
                  "precio-producto": "$pro_precio",
                  "descripcion-producto": "$pro_descripcion",
                  "categoria-producto": "$pro_categoria",
                  "restaurante-producto": "$pro_restaurante",
                  "imagen-producto": "$pro_imagen",
                }
              }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const pedidosV1Id = async (req, res) => {

}

export const pedidosV1_1 = async (req, res) => {

}

export const pedidosV1_11 = async (req, res) => {
    
}