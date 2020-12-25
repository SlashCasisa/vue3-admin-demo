<template>
  <div class="persoanl-echart-container">
    <div v-for="(item,index) in object.echartsData" :key="index">
      <div>{{ item.title }}</div>
      <div :id="item.id" style="width:660px;height:320px;padding: 20px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, reactive } from 'vue'
export default {          
  setup() {
    const object = reactive({
      myChart: null,
      echartsData: [
        {
          id: 'recruit',
          title: '招聘人数',
          seriesData: [2,1,5,7,5,7,4,2,1,2,1]
        },
        {
          id: 'retire',
          title: '离职人数',
          seriesData: [1,1,5,7,5,7,4,2,1,2,1]
        }
      ]
    })
    const { ctx } = getCurrentInstance()
    const initEchart = () => {
      object.echartsData.forEach(item => {
        const seriesData = {
          seriesData: item.seriesData
        }
        object.myChart = ctx.$echarts.init(
          document.querySelector(`#${item.id}`)
        )
        ctx.$myEcharts.drawBarEcharts(object.myChart, seriesData)

      })
    }
    onMounted(() => {
      initEchart()
    })
    return {
      object
    }
  }
}
</script>

<style lang="scss">
.persoanl-echart-container {
  padding: 30px 30px;
}
</style>