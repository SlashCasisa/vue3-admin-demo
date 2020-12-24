import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.ts'
import router from './router/index'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
import myEcharts from './utils/echart';

const app = createApp(App)
app.use(echarts)
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$myEcharts = myEcharts
app.use(router).use(ElementPlus).mount('#app')
