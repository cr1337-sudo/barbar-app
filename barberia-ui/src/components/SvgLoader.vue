<template>
    <div class="svg" :style="{fill}">
        <Svg/>
    </div>
</template>

<style lang="less" scoped>
@import "@/colors.less";

.svg{
    fill: @colorWhite;
}
</style>
<script setup>

import { defineAsyncComponent } from 'vue'
let imagePath;
const basePath = '/src/assets/'
let selectedSvg;
const props = defineProps({
    name: String,
    fill: String
})

switch (props.name) {
    case 'home':
        selectedSvg = 'home'
        break;
    case 'search':
        selectedSvg = 'search'
        break;
    case 'today':
        selectedSvg = 'today'
        break;
    case 'favorite':
        selectedSvg = 'favorite'
        break;
    case 'account':
        selectedSvg = 'account'
        break;
    case 'down-arrow':
        selectedSvg = 'expand'
        break;
    default:
        break;
}

const Svg = defineAsyncComponent(() => import(`${basePath}${selectedSvg}.svg`))
</script>