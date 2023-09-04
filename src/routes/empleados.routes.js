import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import {limitEmpleadosGET,limitEmpleadosPOST,limitEmpleadosPUT} from '../config/limit.js';
import { empleadosDtoId,empleadosDtoPost,empleadosDtoPut } from "../DTO/empleados.js";
import { empleadosV1,empleadosV1Id,empleadosV1_1, empleadosV1_11 } from "../versiones/v1/empleados.js";
const empleadosRouter = Router();
const version = routesVersioning();

empleadosRouter.get('/',limitEmpleadosGET(), version({
    "1.0.0": empleadosV1
}))

empleadosRouter.get('/:dni',empleadosDtoId,limitEmpleadosGET(),version({
    "1.0.1": empleadosV1Id
}))

empleadosRouter.post('/', empleadosDtoPost,limitEmpleadosPOST(), version({
    "1.0.2": empleadosV1_1
}))

empleadosRouter.put('/:dni',empleadosDtoPut,limitEmpleadosPUT(), version({
    "1.0.3": empleadosV1_11
}))

export default empleadosRouter;