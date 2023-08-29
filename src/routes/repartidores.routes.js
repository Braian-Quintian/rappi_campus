import routesVersioning from 'express-routes-versioning';
import { Router } from 'express';
import { limitRepartidoresGET,limitRepartidoresPOST } from '../config/limit.js';
import {repartidoresDtoId,repartidoresDtoPost } from '../DTO/repartidores.dto.js';
import { repartidoresV1, repartidoresV1Id, repartidoresV1_1} from '../versiones/v1/repartidores.js'

const repartidoresRoutes = Router();
const version = routesVersioning();

repartidoresRoutes.get('/', limitRepartidoresGET(), version({
    "1.0.0": repartidoresV1
}));

repartidoresRoutes.get('/:id', repartidoresDtoId,limitRepartidoresGET(), version({
    "1.0.1": repartidoresV1Id
}));

repartidoresRoutes.post('/', repartidoresDtoPost,limitRepartidoresPOST(), version({
    "1.0.2": repartidoresV1_1
}));

export default repartidoresRoutes;