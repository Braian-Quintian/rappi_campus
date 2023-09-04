import routesVersioning from 'express-routes-versioning';
import { Router } from "express";
import { limitClientesGET, limitClientesPOST,limitClientesPUT } from '../config/limit.js';
import { clientesDtoId, clientesDtoPost, clientesDtoPut } from "../DTO/clientes.js";
import { clientesV1, clientesV1Id, clientesV1_1, clientesv1_11 } from "../versiones/v1/clientes.js";
const clientesRouter = Router();
const version = routesVersioning();

clientesRouter.get('/', limitClientesGET(), version({
    "1.0.0": clientesV1
}))

clientesRouter.get('/:dni', clientesDtoId, limitClientesGET(), version({
    "1.0.1": clientesV1Id
}))

clientesRouter.post('/', clientesDtoPost, limitClientesPOST(), version({
    "1.0.2": clientesV1_1
}))

clientesRouter.put('/:dni', clientesDtoPut, limitClientesPUT(), version({
    "1.0.3": clientesv1_11
}))

export default clientesRouter;