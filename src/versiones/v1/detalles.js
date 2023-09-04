import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
const db = await connect();

export const detallesV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('detalles').aggregate([
            {
                $project: {
                  _id: 0,
                  "id-pedido": "$det_ped_pedido",
                  "id-producto": "$det_ped_producto",
                  "precio-producto": "$pro_precio",
                  "det_ped_cantidad": "$pro_descripcion",
                  "det_ped_total": "$pro_restaurante",
                  "imagen-producto": "$pro_imagen",
                }
              }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const detallesV1Id = async (req, res) => {

}

export const detallesV1_1 = async (req, res) => {

}

export const detallesV1_11 = async (req, res) => {
    
}