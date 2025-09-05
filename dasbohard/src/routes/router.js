import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth';

const routes = [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {
        path: '/dashboard', 
        component: () => import('../views/Dashboard.vue'),
        meta: { requiresAuth: true } 
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    
    if (authStore.session === null) {
        await authStore.fetchSession();
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const session = authStore.session;

    if (requiresAuth && !session) {
        next('/login');
    } else if ((to.path === '/login' || to.path === '/register') && session) {
        next('/dashboard');
    } else {
        next();
    }
});