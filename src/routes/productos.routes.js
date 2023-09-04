import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import {limitProductosGET,limitProductosPOST,limitProductosPUT} from '../config/limit.js';
import { productosDtoId,productosDtoPost,productosDtoPut } from "../DTO/productos.js";
import { productosV1,productosV1Id,productosV1_1, productosV1_11 } from "../versiones/v1/productos.js";
const productosRouter = Router();
const version = routesVersioning();

productosRouter.get('/',limitProductosGET(), version({
    "1.0.0": productosV1
}))

productosRouter.get('/:id',productosDtoId,limitProductosGET(),version({
    "1.0.1": productosV1Id
}))

productosRouter.post('/', productosDtoPost,limitProductosPOST(), version({
    "1.0.2": productosV1_1
}))

productosRouter.put('/:id',productosDtoPut,limitProductosPUT(), version({
    "1.0.3": productosV1_11
}))

export default productosRouter;