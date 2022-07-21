const ROUTES = {
    LOGIN: {
        path: '/login',
        name: 'login'
    },
    TODO: {
        path: '/todo',
        name: 'todo',
        alias: '/',
        meta: {auth: true},
    }
}

export {
    ROUTES
}