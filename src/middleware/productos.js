import Routes from 'express';
import passportHelper from '../config/passportHelpert.js'
import productosRoutes from '../routes/productos.routes.js'
const router = Routes();

router.use(passportHelper.authenticate('bearer', { session:false}))
router.use('/', productosRoutes)

export {
    router
}