<template>
  <div class="persoanl-echart-container">
    <div v-for="(item, index) in object.echartsData" :key="index" class="echart2">
      <div>{{ item.title }}</div>
      <div :id="item.id" style="width: 660px; height: 320px; padding: 20px;"></div>
    </div>
    <el-button type="primary" @click="showDialog">出现弹框</el-button>
    <export-date :isShow="object.isShow"></export-date>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, reactive } from "vue";
import exportDate from "../../components/dialogs/exportDate.vue";

export default {
  components: {
    exportDate
  },
  setup() {
    const object = reactive({
      myChart: null,
      echartsData: [
        {
          id: "recruit",
          title: "招聘人数",
          seriesData: [2, 1, 5, 7, 5, 7, 4, 2, 1, 2, 1],
        },
        {
          id: "retire",
          title: "离职人数",
          seriesData: [1, 1, 3, 3, 2, 3, 4, 2, 1, 2, 1],
        },
      ],
      isShow: false
    });
    // const { ctx } = getCurrentInstance();
    const { proxy } = getCurrentInstance() as any; 
    console.log(proxy,'proxy***')
    const initEchart = () => {
      object.echartsData.forEach((item) => {
        const seriesData = {
          seriesData: item.seriesData,
        };
        object.myChart = proxy.$echarts.init(
          document.querySelector(`#${item.id}`)
        );
        proxy.$myEcharts.drawBarEcharts(object.myChart, seriesData);
      });
    };
    onMounted(() => {
        initEchart();
    });
    const methods = {
      showDialog() {
        console.log('ok');
        
        object.isShow = true
      }
    }
    return {
      object,
      ...methods
    };
  },
};
</script>

<style lang="scss">
.persoanl-echart-container {
  width: 100%;
  height: 100%;
  margin: 16px;
  .echart2 {
    height: 397px;
    padding: 30px 30px;
    margin-bottom: 16px;
    background: var(--c3);
  }

}

</style>