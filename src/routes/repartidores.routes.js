import routesVersioning from 'express-routes-versioning';
import { Router } from 'express';
import { limitRepartidores } from '../config/limit.js';
import {repartidoresDtoId } from '../DTO/repartidores.dto.js';
import { repartidoresV1, repartidoresV1Id} from '../versiones/v1/repartidores.js'

const repartidoresRoutes = Router();
const version = routesVersioning();

repartidoresRoutes.get('/', limitRepartidores(), version({
    "1.0.0": repartidoresV1
}));

repartidoresRoutes.get('/:id', repartidoresDtoId,limitRepartidores(), version({
    "1.0.1": repartidoresV1Id
}));

export default repartidoresRoutes;