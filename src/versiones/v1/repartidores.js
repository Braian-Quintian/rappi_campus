import { connect } from '../../connection/connection.js'
const db = await connect();

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