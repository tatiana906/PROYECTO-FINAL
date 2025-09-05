import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/dashboard', component: () => import('../views/Dashboard.vue')}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})