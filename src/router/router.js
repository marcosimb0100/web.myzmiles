import { createRouter, createWebHashHistory } from 'vue-router';
import App from '../App.vue'; //
import permisoRutas from './permisosRutas';
// import permisoAcceso from './permisoAcceso';

const routes = [{
        path: '/:pathMatch(.*)*',
        name: 'notpagefound',
        component: () =>
            import ( /* webpackChunkName: "notpagefound" */ '../pages/NotFound.vue')
    },
    {
        path: '/login',
        name: 'login',
        // beforeEnter: permisoAcceso,
        component: () =>
            import ( /* webpackChunkName: "login" */ '../pages/login/Login.vue')
    },
    {
        path: '/',
        redirect: "/login",
        name: 'app',
        component: App,
        children: [
            {

                path: '/main',
                name: 'main',
                beforeEnter: permisoRutas,
                component: () =>
                    import ( /* webpackChunkName: "principal" */ '../pages/principal/Principal.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;