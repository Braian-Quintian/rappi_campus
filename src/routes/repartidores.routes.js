import routesVersioning from 'express-routes-versioning';
import { Router } from 'express';
import { limitRepartidoresGET, limitRepartidoresPOST, limitRepartidoresPUT } from '../config/limit.js';
import { repartidoresDtoId, repartidoresDtoPost, repartidoresDtoPut } from '../DTO/repartidores.js';
import { repartidoresV1, repartidoresV1Id, repartidoresV1_1, repartidoresV1_11 } from '../versiones/v1/repartidores.js'
const repartidoresRoutes = Router();
const version = routesVersioning();

repartidoresRoutes.get('/', limitRepartidoresGET(), version({
    "1.0.0": repartidoresV1
}));

repartidoresRoutes.get('/:id', repartidoresDtoId, limitRepartidoresGET(), version({
    "1.0.1": repartidoresV1Id
}));

repartidoresRoutes.post('/', repartidoresDtoPost, limitRepartidoresPOST(), version({
    "1.0.2": repartidoresV1_1
}));

repartidoresRoutes.put('/:id', repartidoresDtoPut, limitRepartidoresPUT(), version({
    "1.0.3": repartidoresV1_11
}));

export default repartidoresRoutes;