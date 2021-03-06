import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.ts'
import router from './router/index'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import locale from '../node_modules/element-plus/packages/locale/lang/zh-cn'
// import locale from '../node_modules/element-plus/lib/locale/lang/zh-cn'
// import * as echarts from 'echarts'
// import myEcharts from './utils/echart'
import { formatTimestamp } from './utils/common'//引入日期、格式化内容


import "./assets/_variable.scss";
const app = createApp(App)

// app.config.globalProperties.$echarts = echarts
// app.config.globalProperties.$myEcharts = myEcharts
app.config.globalProperties.$formatTimestamp = formatTimestamp
app.use(router).use(ElementPlus,{ locale }).mount('#app')
 