<script setup lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted, watch, nextTick } from 'vue';

const chart: any = ref(null)
const chartElement = ref(null)          // vue3语法糖获取dom节点需要先声明一个和节点ref名字相同的变量

const props = defineProps({
    option: {
        type: null,         // 将 prop 类型设置为 any,如果直接设置any会提示将any用作了值
        default: () => { }
    },
    isMap: {
        type: Boolean,
        default: () => false
    },
    geoMapJSon: {
        type: Object,
        default: () => { }
    },
    mapName: {
        type: String,
        defalut: () => 'baseMap'
    }
})

watch(props.option, (newValue: any) => {
    nextTick(() => {
        try {
            chart.value.clear()
            chart.value.setOption(newValue)         // 根据option数据绘制图表
        } catch (error) {
            console.error(error)
        }
    })
}, { deep: true, immediate: true }
)

watch(props.geoMapJSon, (newValue: any, oldValue: any) => {
    if (newValue !== oldValue) {
        nextTick(() => {
            try {
                echarts.registerMap('props.mapName', props.geoMapJSon)          // 在echarts中注册使用geoMaoJSON这个文件，其中props.mapName只是地图当前名称，不代表其他的任何意义，无需当前地图的地理数据所在地吻合，但是需要和option.series.map相同，否则地图将无法显示，而且当地理数据是中国且mapName是china时，右下角将展示海南诸岛的缩略图，但如果mapName不为china则不会展示该缩略图
                chart.value.setOption(props.option)         // 根据option数据绘制图表
            } catch (error) {
                console.error(error)
            }
        })
    }
}, { deep: true, immediate: true }
)

onMounted(() => {
    try {
        if (props?.isMap) {
            echarts.registerMap('props.mapName', props.geoMapJSon)
        }
        chart.value = echarts.init(chartElement.value)          // 在onMounted阶段节点渲染完成，此时基于准备好的dom节点初始化echarts实例
    } catch {

    }
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