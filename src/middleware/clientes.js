import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import clientesRoutes from '../routes/clientes.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', clientesRoutes)

export {
    router
}