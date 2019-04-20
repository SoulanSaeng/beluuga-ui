import RideSearch from '@/views/RideSearch'
import Register from '@/views/Register'
import Home from '@/views/Home'
import DriverRegistration from '@/views/DriverRegistration'
import Login from '@/views/Login'
import Recovery from '@/views/Recovery'
import ResetPassword from '@/views/ResetPassword'

export default [{
        path: '/search',
        name: 'search',
        component: RideSearch,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/drive',
        name: 'drive',
        component: DriverRegistration,
    },
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/recovery',
        name: 'recovery',
        component: Recovery,
    },
    {
        path: '/recovery/reset',
        name: 'reset-password',
        component: ResetPassword,
    },
]
