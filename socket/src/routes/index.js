import user from './user'
import auth from './auth'
const initRoutes = (app) => {
    app.use('/api/user', user)
    app.use('/api/auth', auth)
    
}

module.exports = initRoutes