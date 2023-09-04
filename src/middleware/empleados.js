import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import empleadosRoutes from '../routes/empleados.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', empleadosRoutes)

export {
    router
}