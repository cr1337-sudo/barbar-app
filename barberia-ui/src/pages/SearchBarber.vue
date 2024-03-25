<template>
    <Navigation :type="'input'" :placeholder="'Search for a barber!'" noPrevious/>
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
        padding: 0 3rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        overflow: scroll;
    }
</style>