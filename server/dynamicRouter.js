import { router as Repartidores } from '../src/middleware/repartidores.js';
export async function dynamicRouter(req, res, next) {
    const { collection } = req.params;
    switch (collection) {
        case 'repartidores':
            return Repartidores(req, res, next);
        default:
            return res.status(404).send({ error: 'Ruta no encontrada' });
    }
};