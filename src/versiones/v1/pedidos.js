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
                  "id-pedido": "$ped_id",
                  "cliente-pedido": "$ped_cliente",
                  "restaurante-pedido": "$ped_restaurante",
                  "estado-pedido": "$ped_estado",
                  "fecha-pedido": "$ped_fecha",
                  "hora-pedido": "$ped_hora",
                  "direccion-pedido": "$ped_direccion",
                  "repartidor-pedido": "$ped_repartidor",
                  "metodo-pago": "$ped_pago",
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