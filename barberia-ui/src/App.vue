<script setup>
import Home from '@/pages/Home.vue';
import Navbar from '@/components/Navbar.vue';
import BarberShopInfo from './pages/BarberShopInfo.vue';
</script>

<template>
    <div class="container">
        <div class="item">
            <!-- <Home /> -->
            <BarberShopInfo />
        </div>
        <div class="nav">
            <Navbar />
        </div>
    </div>
</template>

<style scoped lang="less">
.container {
    position: relative;
    height: 100%;

    .item {
        height: 92%;
    }

    .nav {
        position: relative;
        bottom: 0;
        height: 8%;
    }
}
</style>
