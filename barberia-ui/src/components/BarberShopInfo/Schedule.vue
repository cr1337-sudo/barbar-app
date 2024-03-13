
<script setup>
import BarberImage from '../BarberImage.vue';
import SvgLoader from '../SvgLoader.vue';

defineProps(['collapse'])
</script>
<template>
    <div class="schedule">
        <SvgLoader name="down-arrow" class="schedule__go-back" @click="collapse"/>
        <section class="schedule__barber-card card">
            <section class="schedule__barber-card--image">
                <BarberImage medium />
            </section>
            <p class="schedule__barber-card--name">
                Larry Kapija
            </p>
        </section>

        <section class="schedule__detail card">
            <p class="schedule__detail--name">Corte masculino</p>
            <p class="schedule__detail--price">$3000.00</p>
        </section>

        <section class="schedule__time card">
            <section class="schedule__time--list">
                <li class="schedule__time--list--item">13:00</li>
                <li class="schedule__time--list--item">13:00</li>
                <li class="schedule__time--list--item">13:00</li>
                <li class="schedule__time--list--item">13:00</li>
            </section>
        </section>

    </div>
</template>

<style lang="less" scoped>
@import "@/colors.less";
.schedule {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;

    &__go-back {
        fill: @colorWhite;
    }
    &__barber-card {
        display: flex;
        align-items: center;

        &--name {
            padding-left: 2rem;
            font-size: 1.6rem;
            font-weight: 600;
        }
    }

    &__detail {
        justify-content: space-between;
        display: flex;
        font-size: 1.4rem;
        font-weight: 500;
    }

    &__time {
        &--list {
            display: flex;
            justify-content: space-between;
            list-style: none;

            &--item {
                font-size: 1.3rem;
                padding: 1rem;
                border-radius: 1.3rem;
                &:hover {
                    background-color: @principalDark;
                    color: @colorWhite;
                }
            }
        }
    }
}
</style>