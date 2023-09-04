import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import {limitDetallesGET,limitDetallesPOST,limitDetallesPUT} from '../config/limit.js';
import { detallesDtoId,detallesDtoPost,detallesDtoPut } from "../DTO/detalles.js";
import { detallesV1,detallesV1Id,detallesV1_1, detallesV1_11 } from "../versiones/v1/detalles.js";
const detallesRouter = Router();
const version = routesVersioning();

detallesRouter.get('/',limitDetallesGET(), version({
    "1.0.0": detallesV1
}))

detallesRouter.get('/:id',detallesDtoId,limitDetallesGET(),version({
    "1.0.1": detallesV1Id
}))

detallesRouter.post('/', detallesDtoPost,limitDetallesPOST(), version({
    "1.0.2": detallesV1_1
}))

detallesRouter.put('/:id',detallesDtoPut,limitDetallesPUT(), version({
    "1.0.3": detallesV1_11
}))

export default detallesRouter;