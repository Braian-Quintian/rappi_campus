import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { limitRestauranteGET, limitRestaurantePOST, limitRestaurantePUT } from "../config/limit.js";
import { restaurantesDtoId,restaurantesDtoPost,restaurantesDtoPut } from "../DTO/restaurante.js";
import { restaurantesV1,restaurantesV1Id, restaurantesV1_1, restaurantesV1_11 } from "../versiones/v1/restaurante.js";
const restauranteRouter = Router();
const version = routesVersioning();

restauranteRouter.get('/', limitRestauranteGET(),version({
    "1.0.0": restaurantesV1
}));

restauranteRouter.get('/:nit', restaurantesDtoId, limitRestauranteGET(), version({
    "1.0.1": restaurantesV1Id
}));

restauranteRouter.post('/', restaurantesDtoPost,limitRestaurantePOST(), version({
    "1.0.2": restaurantesV1_1
}));

restauranteRouter.put('/:nit',restaurantesDtoPut,limitRestaurantePUT(), version({
    "1.0.3": restaurantesV1_11
}));


export default restauranteRouter;