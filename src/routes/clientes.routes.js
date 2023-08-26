import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limitRepartidores } from "../config/limit.js";
import { deleteCliente, getClientes, postCliente } from "../versiones/v2/clientes.js";
import { validateDTOcliente } from "../DTO/clientes.js";
const router = Router();
const version = routesVersioning();

router.use(limitRepartidores());
router.get('/', version({
    "2.0.0": getClientes
}))

router.post('/', validateDTOcliente, version({
    "2.0.0": postCliente
}))

router.delete('/:dni', version({
    "2.0.0": deleteCliente
}))

export {
    router
}