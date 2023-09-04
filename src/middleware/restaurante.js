import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import restauranteRoutes from '../routes/restaurante.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', restauranteRoutes)

export {
    router
}