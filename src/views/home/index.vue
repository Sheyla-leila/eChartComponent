<script setup lang="ts">
import menuTest from "./pageStructure/menu.vue";
import showPanel from "./pageStructure/showPanel.vue";
</script>

<template>
    <div class="wrap flex_row flex_between">
        <div class="menu borderBox">
            <menuTest />
        </div>
        <div class="showPanel borderBox">
            <showPanel />
        </div>
        <div class="editorForms borderBox"></div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to right, #E8C2BF 0% 10%, #AFC0D1 30% 77%, #D8DDAD 85% 100%);

    .borderBox {
        box-sizing: border-box;
        border: 3px solid;
        margin: 20px;
        border-radius: 20px;
    }

    .menu {
        width: 20%;
        height: 90%;
        border-color: #AFC0D1;
    }

    .showPanel {
        width: 60%;
        height: 90%;
        border-color: #D8DDAD;
    }

    .editorForms {
        width: 20%;
        height: 90%;
        border-color: #E8C2BF;
    }
}
</style>