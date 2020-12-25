export default {
    drawPieEcharts: (myEcharts, { title, label, seriesData }) => {
        let option = {
            title: {
                text: title,
                left: 'center',
                bottom: 'bottom',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                top: 170,
                // top: '48%',
                left: '75%',
                data: label
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    label: {
                        //   show: false, //文本标签是否显示
                        position: 'inside', //标签位置
                        color: '#fff',
                        formatter: '{d}%'
                    },
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: seriesData,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myEcharts.hideLoading()
        myEcharts.setOption(option, {
            notMerge: true // 不和之前的数据合并
        })
    },

    drawBarEcharts: (myEcharts, { seriesData }) => {
        let option = {
            color: ['#8B9EFC'],
            tooltip: {},
            legend: {},
            grid: {
              left: '4%',
              top: 30
            },
            xAxis: {
              name: '月份',
              axisTick: { //是否显示坐标刻度
                show: false
              },
              nameTextStyle: { //坐标轴名称颜色
                color: '#909399'
              },
              axisLabel: { //坐标轴刻度的颜色
                color: '#909399',
                // formatter:function(value){ //文字纵向排列
                //     return value.split("").join("\n");
                // },
                // rotate: 45 //倾斜
              },
              axisLine: { //是否显示坐标轴轴线
                show: false,
                lineStyle: {
                  color: '#E4E7ED'
                }
              },
              data: ['01','02','03','04','05','06','07','08','09','10','11']
            },
            yAxis: {
              type: 'value',
              name: '人数',
              nameTextStyle: { //坐标轴名称颜色
                color: '#909399',
                align: "right"
              },
              axisLabel: { //坐标轴刻度的颜色
                color: '#909399'
              },
              axisLine: { //坐标轴轴线颜色
                show: true,
                lineStyle: {
                  color: '#E4E7ED'
                }
              }
            },
            series: [{
              type: "bar",
              barWidth: 24,
              data: seriesData,
              barGap: 30
            }]
          }   
     
        myEcharts.hideLoading()
        myEcharts.setOption(option, {
            notMerge: true // 不和之前的数据合并
        })

    }
}