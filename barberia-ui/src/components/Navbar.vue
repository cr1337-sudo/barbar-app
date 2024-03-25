<template>
    <div class="navbar">
        <router-link :to="{ name: 'home' }">
            <SvgLoader name="home" />
        </router-link>

        <router-link :to="{ name: 'search' }">
            <SvgLoader name="search" />
        </router-link>
        <router-link :to="{ name: 'bookings' }">
            <SvgLoader name="today" class="selected" />
        </router-link>
        <router-link :to="{ name: 'favorites' }">
            <SvgLoader name="favorite" />
        </router-link>
        <li>
            <SvgLoader name="account" />
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