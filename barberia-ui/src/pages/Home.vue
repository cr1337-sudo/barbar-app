<template>
    <div class="home">
        <section class="home__title">
            <HomeTitle />
        </section>
        <section class="home__choose-barber">
            <HomeBarberCard :buttonEvent="barberInfo" />
            <HomeBarberCard />
            <!-- <HomeBarberCard /> -->
        </section>
    </div>
</template>

<style lang="less" scoped>
@import "@/colors.less";

.home {
    height: 100%;
    padding: 3rem;

    &__title {
        margin-bottom: 3rem;
    }

    &__choose-barber {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        gap: 1rem;
    }
}
</style>

<script setup>
import HomeBarberCard from '@/components/Home/HomeBarberCard.vue';
import HomeTitle from '@/components/Home/HomeTitle.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const barberInfo = () => {
    router.push({ name: 'barbers', params: { id: '1' } })
}

</script>