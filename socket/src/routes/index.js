import user from './user'
import auth from './auth'
const initRoutes = (app) => {
    app.use('/api/auth', auth)
    app.use('/api/user', user)

}

module.exports = initRoutes