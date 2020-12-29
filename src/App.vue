<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
import Store from "./store/store"
import {defineComponent, provide, ref} from 'vue'
import * as echarts from 'echarts'
import myEcharts from './utils/echart'
export default defineComponent({
  setup() {
    provide(Store.sidebarRoutes, ref([]))
    provide(Store.echarts, ref(echarts))
    provide(Store.myEcharts,ref(myEcharts))
  }
})
</script>
