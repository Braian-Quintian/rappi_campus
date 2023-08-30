import routesVersioning from 'express-routes-versioning';
import { Router } from "express";
import { limitClientesGET } from '../config/limit.js';
import { clientesDtoId, clientesDtoPost } from "../DTO/clientes.js";
import { clientesV1, clientesV1Id,clientesV1_1, clientesv1_11 } from "../versiones/v1/clientes.js";
const clientesRouter = Router();
const version = routesVersioning();

clientesRouter.get('/', limitClientesGET(), version({
    "1.0.0": clientesV1
}))

clientesRouter.get('/:id',clientesDtoId,limitClientesGET(),version({
    "1.0.1": clientesV1Id
}))

clientesRouter.post('/', clientesDtoPost, version({
    "1.0.2": clientesV1_1
}))

clientesRouter.put('/:dni',clientesDtoId, version({
    "1.0.3": clientesv1_11
}))

export default clientesRouter;