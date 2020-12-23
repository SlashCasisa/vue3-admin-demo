import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.ts'
import router from './router/index'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
