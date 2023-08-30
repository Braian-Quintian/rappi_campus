import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import {limitEmpleadosGET} from '../config/limit.js';
import { validateDTOEmpleado,empleadosDtoId } from "../DTO/empleados.js";
import { empleadosV1,empleadosV1Id,empleadosV1_1, putEmpleado } from "../versiones/v6/empleados.js";
const empleadosRouter = Router();
const version = routesVersioning();

empleadosRouter.get('/',limitEmpleadosGET(), version({
    "1.0.0": empleadosV1
}))

empleadosRouter.get('/:dni',empleadosDtoId,version({
    "1.0.1": empleadosV1Id
}))

empleadosRouter.post('/', validateDTOEmpleado, version({
    "1.0.2": empleadosV1_1
}))

empleadosRouter.put('/:dni', version({
    "1.0.3": putEmpleado
}))

export default empleadosRouter;