import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Contact from "./components/Contact.vue"
import Home from "./components/Home.vue"
import PrivacyPolicy from './components/PrivacyPolicy.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const routes = [
    {path: "/contact", component: Contact},
    {path: "/privacypolicy", component: PrivacyPolicy},
    {path: "/", component: Home}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
