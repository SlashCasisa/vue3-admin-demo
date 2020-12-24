export default {
    drawPieEcharts: (myEcharts) => {
        let option = {
            title: {
                text: '年龄结构',
                fontWeight: 'normal',
                fontSize: 16,
                left: 'center',
                top: 'bottom',

            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                top: '50%',
                left: '75%',
                data: ['18-24岁', '25-35岁', '36-45岁', '46-65岁']
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
                    data: [
                        {
                            value: 35,
                            name: '18-24岁',
                            itemStyle: {
                                color: '#9FEFC5'
                            }
                        },
                        { 
                            value: 25, 
                            name: '25-35岁', 
                            itemStyle: { 
                                color: '#FFA4BD' 
                            } 
                        },
                        { 
                            value: 25, 
                            name: '36-45岁', 
                            itemStyle: { 
                                color: '#FFCD9F' 
                            } 
                        },
                        { 
                            value: 15, 
                            name: '46-65岁', 
                            itemStyle: { 
                                color: '#CD9FFF' 
                            } 
                        },
                    ],
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
    }
}

