import { Router } from "express";
import routesVersioning from 'express-routes-versioning';
import { validateDTOEmpleado } from "../DTO/empleados.js";
import { deleteEmpleado, getEmpleados, postEmpleado, putEmpleado } from "../versiones/v6/empleados.js";
const router = Router();
const version = routesVersioning();
router.get('/', version({
    "6.0.0": getEmpleados
}))

router.post('/', validateDTOEmpleado, version({
    "6.0.0": postEmpleado
}))

router.put('/:dni', version({
    "6.0.0": putEmpleado
}))

router.delete('/:dni', version({
    "6.0.0": deleteEmpleado
}))

export {
    router
}