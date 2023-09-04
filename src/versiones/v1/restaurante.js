import { connect } from "../../connection/connection.js";
import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';
const db = await connect();


export const restaurantesV1 = async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const result = await db.collection('restaurantes').aggregate([
            {
                $project: {
                  _id: 0,
                  "nit-restaurante": "$res_nit",
                  "nombre-restaurante": "$res_nombre",
                  "correo-restaurante": "$res_email",
                  "direccion-restaurante": "$res_direccion",
                  "telefono-restaurante": "$res_telefono",
                  "categoria-restaurante": "$res_categoria",
                  "hora-apertura": "$res_hora_apertura",
                  "hora-cierre": "$res_hora_cierre"
                }
              }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const restaurantesV1Id = async (req, res) => {
    if (!req.rateLimit) return;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const result = await db.collection('restaurantes').findOne(
        { res_nombre: req.params.nombre },
        {
            projection: {
                _id: 0,
                "nit-restaurante": "$res_nit",
                "nombre-restaurante": "$res_nombre",
                "correo-restaurante": "$res_email",
                "direccion-restaurante": "$res_direccion",
                "telefono-restaurante": "$res_telefono",
                "categoria-restaurante": "$res_categoria",
                "hora-apertura": "$res_hora_apertura",
                "hora-cierre": "$res_hora_cierre"
            },
        }
    );
    if (!result) return res.status(404).json({ message: 'No se encontró el restaurante' });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const restaurantesV1_1 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const cryptPass = await bcrypt.hash(req.body["contraseña-restaurante"], 10);
        const dataSend = {
            res_nit: parseInt(req.body["nit-restaurante"]),
            res_nombre: req.body["nombre-restaurante"],
            res_email: req.body["correo-restaurante"],
            res_password: cryptPass,
            res_direccion: req.body["direccion-restaurante"],
            res_telefono: req.body["telefono-restaurante"],
            res_categoria: req.body["categoria-restaurante"],
            res_hora_apertura: req.body["hora-apertura"],
            res_hora_cierre: req.body["hora-cierre"],
            res_permisos: {
                "/restaurantes": ["1.0.2"],
                "/restaurantes/:nit": ["1.0.3"],
            }
        }
        await db.collection("restaurantes").insertOne(dataSend);
        res.status(201).json({ message: "El restaurante ha sido creado exitosamente. " });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const restaurantesV1_11 = async (req, res) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
        const restauranteId = parseInt(req.params.nit);
        const updatedData = {
            res_telefono: req.body["telefono-restaurante"],
            res_hora_apertura: req.body["hora-apertura"],
            res_hora_cierre: req.body["hora-cierre"],
          };
          const result = await db.collection('restaurantes').updateOne(
            { res_nit: restauranteId },
            { $set: updatedData }
          );
          if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'No se encontró el restaurante' });
          }
          res.status(200).json({ message: 'El restaurante se ha actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}