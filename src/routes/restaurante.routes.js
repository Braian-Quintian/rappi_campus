import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limitRepartidores } from "../config/limit.js";
import { validateDTORestaurante } from "../DTO/restaurante.js";
import { deleteRestaurante, getRestautantes, postRestaurante, putRestautantes } from "../versiones/v4/restaurante.js";
const router = Router();
const version = routesVersioning();

router.use(limitRepartidores());
router.post('/', validateDTORestaurante, version({
    "4.0.0": postRestaurante
}))

router.get('/', version({
    "4.0.0": getRestautantes
}))

router.put('/:nit', version({
    "4.0.0": putRestautantes
}))

router.delete('/:nit', version({
    "4.0.0": deleteRestaurante
}))

export {
    router
}