import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { validateDTORestaurante } from "../DTO/restaurante.js";
import { deleteRestaurante, getRestautantes, postRestaurante, putRestautantes } from "../versiones/v4/restaurante.js";
const restauranteRouter = Router();
const version = routesVersioning();
restauranteRouter.post('/', validateDTORestaurante, version({
    "4.0.0": postRestaurante
}))

restauranteRouter.get('/', version({
    "4.0.0": getRestautantes
}))

restauranteRouter.put('/:nit', version({
    "4.0.0": putRestautantes
}))

restauranteRouter.delete('/:nit', version({
    "4.0.0": deleteRestaurante
}))

export default restauranteRouter;