import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/style/index.css'
import VueNumberInput from '@chenfengyuan/vue-number-input';

createApp(App).component(VueNumberInput.name, VueNumberInput).use(router).use(store).mount('#app')
