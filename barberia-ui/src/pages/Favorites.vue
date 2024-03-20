<template>
    <Navigation type="text" text="Favorites"/>
    <div class="main">
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
        <HomeBarberCard />
    </div>
</template>

<script setup>
import HomeBarberCard from '../components/Home/HomeBarberCard.vue';
import Navigation from '../components/Navigation.vue';
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        overflow: scroll;
    }
</style>