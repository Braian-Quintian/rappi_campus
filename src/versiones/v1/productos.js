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
                  "imagen-producto": "$pro_imagen",
                }
              }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const productosV1Id = async (req, res) => {

}

export const productosV1_1 = async (req, res) => {

}

export const productosV1_11 = async (req, res) => {
    
}