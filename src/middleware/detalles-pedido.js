import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import detallesRoutes from '../routes/detalles.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', detallesRoutes)

export {
    router
}