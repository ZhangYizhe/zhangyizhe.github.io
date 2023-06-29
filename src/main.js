import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'

import './assets/main.css'

import router from "./router";


const app = createApp(App)

app.use(router)
app.use(VueCookies, { expires: '30d'})

app.mount('#app')