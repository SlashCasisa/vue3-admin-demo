<template>
    <div class="echarts-container">
        <div v-for="(item, index) in object.echartsData" :key="index" :id="item.id" style="width: 556px; height: 340px"></div>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted, reactive } from "vue";
export default {
  setup(props) {
      
    const object = reactive({ 
        myChart: null,
        echartsData: [
            {
                id: 'age',
                title: '年龄结构',
                label: [ '18-24岁', '25-35岁', '36-45岁', '46-65岁' ],
                seriesData: [
                    {
                        value: 35,
                        name: '18-24岁',
                    },
                    {
                        value: 25,
                        name: '25-35岁',
                    },
                    {
                        value: 25,
                        name: '36-45岁',
                    },
                    {
                        value: 15,
                        name: '46-65岁',
                    },
                ]
            },
            {
                id: 'work',
                title: '工龄结构',
                label: ['1年以内', '1-3年', '4-9年', '10年及以上'],
                seriesData: [
                    {
                        value: 25,
                        name: '1年以内',
                    },
                    {
                        value: 25,
                        name: '1-3年',
                    },
                    {
                        value: 35,
                        name: '4-9年',
                    },
                    {
                        value: 15,
                        name: '10年及以上',
                    },
                ]
            },
            {
                id: 'sex',
                title: '性别结构',
                label: ['女性', '男性'],
                seriesData: [
                    {
                        value: 45,
                        name: '女性',
                    },
                    {
                        value: 55,
                        name: '男性',
                    },
                ]
                
            },
            {
                id: 'education',
                title: '学历结构',
                label: ['专科','本科','研究生','博士生'],
                seriesData: [
                    {
                        value: 25,
                        name: '专科',
                    },
                    {
                        value: 25,
                        name: '本科',
                    },
                    {
                        value: 35,
                        name: '研究生',
                    },
                    {
                        value: 15,
                        name: '博士生',
                    },
                ]
                
            }
        ],
        color: {
            0: {color: '#9FEFC5'},
            1: {color: '#FFA4BD'},
            2: {color: '#FFCD9F'},
            3: {color: '#CD9FFF'}
        }
    });
    const { ctx } = getCurrentInstance()
    const initEchart = () => {
        object.echartsData.forEach(item => {
            const seriesData = item.seriesData.map((item, index) => {
                return {
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: object.color[index].color
                    }
                }
            })
            const echartsData = {
                title: item.title,
                label: item.label,
                seriesData: seriesData,
            }
            object.myChart = ctx.$echarts.init(
                document.querySelector(`#${item.id}`)
            )
            ctx.$myEcharts.drawPieEcharts(object.myChart, echartsData)
        })
    };
    onMounted(() => {
      initEchart();
    });
    return {
      object,
      initEchart,
    };
  },
};
</script>
<style lang="scss">
.echarts-container {
    display: flex;
    flex-wrap: wrap;
}
</style>