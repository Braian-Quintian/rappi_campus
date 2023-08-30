import { router as Repartidores } from '../src/middleware/repartidores.js';
import { router as Clientes } from '../src/middleware/clientes.js';
import { router as Restaurante } from '../src/middleware/restaurante.js';
import { router as Empleados } from '../src/middleware/empleados.js';
export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;
    switch (collection) {
        case 'repartidores':
            return Repartidores(req, res, next);
        case 'clientes':
            return Clientes(req, res, next);
        case 'restaurante':
            return Restaurante(req, res, next);
        case 'empleados':
            return Empleados(req, res, next);
        default:
            return res.status(404).send({ error: 'Ruta no encontrada' });
    }
};