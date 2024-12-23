import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/display.css'

import { createRouter, createWebHistory } from 'vue-router'
import Information from "@/components/Information.vue";
import Lk from "@/components/Lk.vue";
import Registration from "@/components/Registration.vue"
import Login from "@/components/Login.vue"

const app = createApp(App)

const routes = [
  { path: '/', component: Information },
  { path: '/lk', component: Lk },
  { path: '/registration', component: Registration },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.use(ElementPlus)
app.use(router)
app.mount('#app')