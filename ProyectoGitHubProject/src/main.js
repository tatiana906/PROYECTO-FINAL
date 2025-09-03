import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { router } from './routes/router.js'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import './style.css'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import App from './App.vue'

const myApp = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

myApp.use(Quasar, {
    plugins: {},
})

myApp.use(router)
myApp.use(pinia)
myApp.mount('#app')
