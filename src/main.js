import { createApp } from 'vue'
import './assets/main.css'

// App
import App from './App.vue'
const app = createApp(App)

// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// Router
import router from "./router";
app.use(router)

// Cookies
import VueCookies from 'vue-cookies'
app.use(VueCookies, { expires: '30d'})

// Components
import NavigationBar from "@/components/NavigationBar.vue";
import FooterView from "@/components/FooterView.vue";
app
    .component('NavigationBar', NavigationBar)
    .component('FooterView', FooterView)

// Start
app.mount('#app')