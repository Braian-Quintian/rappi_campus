import { validationResult } from 'express-validator';
import { connect } from '../../connection/connection.js'
const db = await connect();
import bcrypt from 'bcrypt';

export const repartidoresV1 = async (req,res,next) => {
    if(!req.rateLimit) return; 
    try {
        const result =  await db.collection('repartidores').aggregate([
            {
                $project: {
                    _id: 0,
                    "dni-repartidor": "$rep_dni",
                    "nombre-repartidor": "$rep_primerNombre",
                    "apellido-repartidor": "$rep_primerApellido",
                    "telefono-repartidor": "$rep_telefono",
                    "correo-repartidor": "$rep_email",
                    "estado-repartidor": "$rep_estado",
                    "genero-repartidor": "$rep_genero",
                    "vehiculo-repartidor": "$rep_codigo_vehiculo",
                }
            }
        ]).toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const repartidoresV1Id = async (req, res, next) => {
    if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      const result = await db.collection('repartidores').findOne(
        { rep_dni: parseInt(req.params.id) },
        {
          projection: {
            _id: 0,
            "dni-repartidor": "$rep_dni",
            "nombre-repartidor": "$rep_primerNombre",
            "apellido-repartidor": "$rep_primerApellido",
            "telefono-repartidor": "$rep_telefono",
            "correo-repartidor": "$rep_email",
            "estado-repartidor": "$rep_estado",
            "genero-repartidor": "$rep_genero",
            "vehiculo-repartidor": "$rep_codigo_vehiculo",
          },
        }
      );
      if (!result) return res.status(404).json({ message: 'No se encontró el repartidor' });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const repartidoresV1_1 = async (req, res, next) => {
  if (!req.rateLimit) return;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      

      const dataSendVehiculo = {
        veh_marca: req.body["vehiculo-marca"],
        veh_modelo: req.body["vehiculo-modelo"],
        veh_placa: req.body["vehiculo-placa"],
        veh_color: req.body["vehiculo-color"],
        veh_tipo: req.body["tipo-vehiculo"],
      };
      const resultVehiculo = await db.collection('vehiculos').insertOne(dataSendVehiculo);
      const cryptPass = await bcrypt.hash(req.body["contraseña-repartidor"], 10);

      const dataSend = {
        rep_dni: parseInt(req.body["dni-repartidor"]),
        rep_primerNombre: req.body["nombre-repartidor"],
        rep_primerApellido: req.body["apellido-repartidor"],
        rep_telefono: req.body["telefono-repartidor"],
        rep_email: req.body["correo-repartidor"],
        rep_password: cryptPass,
        rep_estado: "Activo",
        rep_fecha_nac: new Date(req.body["cumpleaños-repartidor"]),
        rep_genero: req.body["genero-repartidor"],
        rep_codigo_vehiculo: (resultVehiculo.insertedId).toString(),
        // rep_permisos //TODAVIA NO DEFINIDO

      }
      const result = await db.collection('repartidores').insertOne(dataSend);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
}