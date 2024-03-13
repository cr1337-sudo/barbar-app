<script setup>
import HomeBarberCard from '../components/Home/HomeBarberCard.vue';
import ServiceItem from '../components/ServiceItem.vue';
import SvgLoader from '../components/SvgLoader.vue';
import Schedule from '@/components/BarberShopInfo/Schedule.vue'
import { ref } from 'vue'

const isScheduling = ref(false)

const setIsScheduling = () => {
    isScheduling.value = !isScheduling.value
}
</script>

<template>
    <div v-if="isScheduling" class="overlay" @click="setIsScheduling"/>
    <div class="barber-shop">
        <div class="barber-shop__body">
            <section class="barber-shop__body--favorite-button">
                <SvgLoader name="favorite" />
            </section>
            <section class="barber-shop__body--header">
                <HomeBarberCard bg-color="transparent" no-box-shadow no-view-profile justify-content="flex-end" />
            </section>
            <section class="barber-shop__body--services">
                <h4 class="barber-shop__body--services--title">Lista de servicios</h4>
                <ul class="barber-shop__body--services--list">
                    <ServiceItem :action="setIsScheduling"/>
                    <ServiceItem :action="setIsScheduling"/>
                    <ServiceItem :action="setIsScheduling"/>
                </ul>
            </section>
        </div>

    </div>
        <transition name="scheduling-transition">

            <div v-if="isScheduling" class="scheduling">
                <Schedule :collapse="setIsScheduling"/>
            </div>
        </transition>
</template>


<style lang="less" scoped>
@import "@/colors.less";

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.barber-shop {
    height: 100%;
    z-index: 1;

    &__body {
        border-top-left-radius: 6rem;
        width: 100%;
        height: 80%;
        background-color: @colorWhite;
        position: fixed;
        bottom: 0;

        &--favorite-button {
            position: absolute;
            right: 6%;
            top: -2.5rem;
            display: inline-block;
            background-color: @principalDark;
            border-radius: 100%;
            height: 5rem;
            width: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }

        &--header {
            margin-top: -3rem;
        }

        &--services {
            padding: 0 3rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            &--title {
                padding: 2rem 0;
                font-size: 1.6rem;
                font-weight: 600;
                color: @principalDark ;
            }
        }
    }

}

.scheduling {
    background-color: @principalSoft;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    z-index: 300;
    position: absolute;
    width: 100%;
    height: 65%;
    bottom: 0;
}

</style>
