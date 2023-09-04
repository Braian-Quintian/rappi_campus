import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import repartidoresRoutes from '../routes/repartidores.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', repartidoresRoutes)

export {
    router
}