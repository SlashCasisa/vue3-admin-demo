import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.ts'
import router from './router/index'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import locale from '../node_modules/element-plus/lib/locale/lang/zh-cn'
const app = createApp(App)
app.use(router).use(ElementPlus,{ locale }).mount('#app')
