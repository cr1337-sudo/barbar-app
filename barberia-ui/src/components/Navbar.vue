<template>
    <div class="navbar">
        <li>
            <SvgLoader name="home"/>
        </li>
        <li>
            <SvgLoader name="search"/>
        </li>
        <li >
            <SvgLoader name="today" class="selected"/>
        </li>
        <li>
            <SvgLoader name="favorite"/>
        </li>
        <li>
            <SvgLoader name="account"/>
        </li>
    </div>
</template>

<style lang="less">
@import "@/colors.less";

.navbar {
    position: relative;
    background-color: @principalDark;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    z-index: 1000;

    .selected {
        border: 0.2rem solid @principalDark;
        margin-top: -50%;
        padding: 1.2rem;
        border-radius: 100%;
        bottom: 10rem;
        background-color: @colorWhite;
        fill: @principalDark;
    }
}
</style>

<script setup>
import SvgLoader from './SvgLoader.vue';
</script>