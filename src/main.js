import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/style/index.css'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://online-shop.api/api/',
  timeout: 5000
})
const vue = createApp({})
vue.config.globalProperties.$axios = instance
createApp(App).use(router).use(store).mount('#app')
