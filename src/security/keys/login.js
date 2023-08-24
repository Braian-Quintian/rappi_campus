import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import {limitLogin} from '../../config/limit.js'
import {createToken} from '../../config/JWT.js'
import { loginV1 } from '../../versiones/v1/login.js'
const login = Routes();
const version = routesVersioning(); 
login.use(limitLogin(), createToken);
login.post('/', version({ "1.0.0": loginV1}));
export {login};