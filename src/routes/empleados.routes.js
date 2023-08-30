import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { validateDTOEmpleado } from "../DTO/empleados.js";
import { deleteEmpleado, getEmpleados, postEmpleado, putEmpleado } from "../versiones/v6/empleados.js";
const empleadosRouter = Router();
const version = routesVersioning();
empleadosRouter.get('/', version({
    "6.0.0": getEmpleados
}))

empleadosRouter.post('/', validateDTOEmpleado, version({
    "6.0.0": postEmpleado
}))

empleadosRouter.put('/:dni', version({
    "6.0.0": putEmpleado
}))

empleadosRouter.delete('/:dni', version({
    "6.0.0": deleteEmpleado
}))

export default empleadosRouter;