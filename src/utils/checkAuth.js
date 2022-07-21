import {ROUTES} from '../router/router-constants'

export default function checkAuth(to, from, next) {
    const isAuth = JSON.parse(localStorage.getItem('Auth'))
    const requireAuth = to.matched.some(record => record.meta.auth)

    if(requireAuth && !isAuth) {
        if(from.path === ROUTES.LOGIN.path) {
        return false
        }
        next(ROUTES.LOGIN.path)
    } else {
        next()
    }
}