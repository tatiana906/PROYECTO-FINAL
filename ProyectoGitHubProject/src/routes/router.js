import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/register', component: Register},
    {path: '/login', component: Login}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})