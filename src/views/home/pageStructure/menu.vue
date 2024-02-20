<script lang="ts" setup>
// import { ref } from 'vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="menuWrap">
        <h2 style="text-align: center; margin: 20px;">图表菜单栏</h2>
        <el-menu default-active="2" class="menuList" unique-opened="true" @open="handleOpen" @close="handleClose">
            <el-sub-menu index="compare">
                <template #title>
                    <span>比较类图表</span>
                </template>
                <el-menu-item index="1-1">基础柱状图</el-menu-item>
                <el-menu-item index="1-2">分组柱状图</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="tendency">
                <template #title>
                    <span>趋势类图表</span>
                </template>
                <el-menu-item index="2-1">基础折线图</el-menu-item>
                <el-menu-item index="2-2">分组折线图</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <span>分布类图表</span>
                </template>
                <el-menu-item index="3-1">散点图</el-menu-item>
                <el-menu-item index="3-2">气泡图</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="map">
                <template #title>
                    <span>地图类图表</span>
                </template>
                <el-menu-item index="4-1">气泡地图</el-menu-item>
                <el-menu-item index="chinaMap">中国地图</el-menu-item>
                <el-menu-item index="4-3">热力地图</el-menu-item>
                <el-menu-item index="4-4">散点底图</el-menu-item>
                <el-menu-item index="4-5">符号地图</el-menu-item>
                <el-menu-item index="4-6">飞线地图</el-menu-item>
                <el-menu-item index="4-7">世界地图</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<style scoped lang="less">
.menuWrap {
    width: 100%;
    height: 100%;

    .menuList {
        border-top: 2px solid #AFC0D1;
        border-right: 0px;
        background-color: transparent;
    }

    .menuList:not(.el-menu--collapse) {
        min-height: 400px;
        background-color: transparent;
    }

    :deep(.el-menu) {
        background-color: transparent;
    }
}
</style>
