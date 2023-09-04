import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import pedidosRoutes from '../routes/pedidos.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', pedidosRoutes)

export {
    router
}