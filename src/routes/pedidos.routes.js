import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import {limitPedidosGET,limitPedidosPOST,limitPedidosPUT} from '../config/limit.js';
import { pedidosDtoId,pedidosDtoPost,pedidosDtoPut } from "../DTO/pedidos.js";
import { pedidosV1,pedidosV1Id,pedidosV1_1, pedidosV1_11 } from "../versiones/v1/pedidos.js";
const pedidosRouter = Router();
const version = routesVersioning();

pedidosRouter.get('/',limitPedidosGET(), version({
    "1.0.0": pedidosV1
}))

pedidosRouter.get('/:id',pedidosDtoId,limitPedidosGET(),version({
    "1.0.1": pedidosV1Id
}))

pedidosRouter.post('/', pedidosDtoPost,limitPedidosPOST(), version({
    "1.0.2": pedidosV1_1
}))

pedidosRouter.put('/:id',pedidosDtoPut,limitPedidosPUT(), version({
    "1.0.3": pedidosV1_11
}))

export default pedidosRouter;