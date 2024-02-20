<script setup lang="ts">
import * as echarts from 'echarts';
import china from 'echarts/map/json/china.json'
import { geoOptionItem } from '../baseOption/geoOption'
import { ref, onMounted } from 'vue';

const chart: any = ref(null)
const chartElement = ref(null)          // vue3语法糖获取dom节点需要先声明一个和节点ref名字相同的变量
const option: any = ref(null)

onMounted(() => {
    option.value = {
        //浮动提示框
        title: { text: '全国各地信息统计情况', left: "4%", top: "3%" },
        // tooltip:{
        //   backgroundColor:"rgba(50,50,50,0.7)",
        //   textStyle:{color:"#fff"},
        //   formatter(params, ticket, callback){
        //     // params.data 就是series配置项中的data数据遍历
        //     let value=0,rukuNum=0,chukuNum=0;
        //     if(params.data){
        //       value = params.data.value;
        //       rukuNum = params.data.rukuNum;
        //       chukuNum = params.data.chukuNum;
        //     }
        //     let html = `<div>入库数量：${rukuNum}</div>
        //                 <div>出库数量：${chukuNum}</div>`
        //     return html;
        //   }
        // },
        // visualMap: {
        //   type: "piecewise",
        //   min:0,
        //   max:5000,
        //   itemWidth: 40,
        //   bottom:60,left:20,
        //   pieces: [ // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
        //     {gt: 900, lt: 1000, label: '900-1000', color: '#6ad86e'}, // (900, 1000]
        //     {gt: 500, lt: 900, label: '500-900', color: '#9adcfa'}, // (500, 900]
        //     {gt: 310, lt: 500, label: '310-500', color: '#ffeb3b'}, // (310, 500]
        //     {gt: 100, lt: 300, label: '100-300', color: '#ff9800'}, // (200, 300]
        //     {gt: 0, lt: 100, label: '>100', color: 'orangered'} // (10, 200]
        //   ]
        // },
        geo: geoOptionItem(
            {
                updata: {
                    'emphasis.label.color': 'red'
                },
                create: {
                    'itemStyle.borderWidth' : 2,
                },
                delete: ['itemStyle.borderType']
            }
        ),
    }
    echarts.registerMap('china', china)
    chart.value = echarts.init(chartElement.value)          // 在onMounted阶段节点渲染完成，此时基于准备好的dom节点初始化echarts实例
    chart.value.setOption(option.value)         // 根据option数据绘制图表
})

</script>

<template>
    <div class="wrap" ref="chartElement"></div>
</template>

<style scoped lang="less">
.wrap {
    width: 90%;
    height: 90%;
}
</style>