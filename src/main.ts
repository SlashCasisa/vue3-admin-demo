import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.ts'
import router from './router/index'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import locale from '../node_modules/element-plus/lib/locale/lang/zh-cn'
import * as echarts from 'echarts'
import myEcharts from './utils/echart';
import { formatTimestamp } from './utils/common.ts'//引入日期、格式化内容


const app = createApp(App)
app.use(echarts)
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$myEcharts = myEcharts
app.config.globalProperties.$formatTimestamp = formatTimestamp
app.use(router).use(ElementPlus,{ locale }).mount('#app')
 