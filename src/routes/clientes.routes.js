import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { deleteCliente, getClientes, postCliente, putCliente } from "../versiones/v2/clientes.js";
import { validateDTOcliente } from "../DTO/clientes.js";
const router = Router();
const version = routesVersioning();
router.get('/', version({
    "2.0.0": getClientes
}))

router.post('/', validateDTOcliente, version({
    "2.0.0": postCliente
}))

router.put('/:dni', version({
    "2.0.0": putCliente
}))

router.delete('/:dni', version({
    "2.0.0": deleteCliente
}))

export {
    router
}