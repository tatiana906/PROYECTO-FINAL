import Register from "../views/Register.vue";

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/register', component: Register}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})