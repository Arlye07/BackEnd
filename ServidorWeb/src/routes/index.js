const usersController = require('../users/controller.users')
const realTimeProductsController = require('../users/controller.users')
const router = app => {

app.use('/auth', authController)
app.use('/users', usersController)
app.use('/login', loginController)
app.use('/realTimeProducts', realTimeProductsController)
}

module.exports = router