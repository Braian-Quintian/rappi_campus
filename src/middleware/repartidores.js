import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import { limitRepartidores } from "../config/limit.js";
import passportHelper from '../config/passportHelpert.js'
import {repartidoresV1} from '../versiones/v1/repartidores.js'
const router = Routes();
const version = routesVersioning();

router.use(limitRepartidores(), passportHelper.authenticate('bearer', { session:false}))
router.get('/', version({
   "1.0.0": repartidoresV1
}))

export {
    router
}