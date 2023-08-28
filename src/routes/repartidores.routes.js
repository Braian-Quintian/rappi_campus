import routesVersioning from 'express-routes-versioning';
import { Router } from 'express';
import { limitRepartidores } from '../config/limit.js';
import { repartidoresV1} from '../versiones/v1/repartidores.js'

const repartidoresRoutes = Router();
const version = routesVersioning();

repartidoresRoutes.get('/', limitRepartidores(), version({
    "1.0.0": repartidoresV1
}));

export default repartidoresRoutes;