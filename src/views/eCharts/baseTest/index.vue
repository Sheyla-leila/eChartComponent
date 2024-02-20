<script setup lang="ts">
import Echart from '@/views/eCharts/index.vue'

import { ref } from 'vue';
        // vue3语法糖获取dom节点需要先声明一个和节点ref名字相同的变量
const option: any = ref({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
})

</script>

<template>
    <Echart :option=option />
</template>

<style scoped lang="less">
.wrap {
    width: 90%;
    height: 90%;
}
</style>