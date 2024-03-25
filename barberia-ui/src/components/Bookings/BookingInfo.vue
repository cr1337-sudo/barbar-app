<template>
    <div class="booking-info">
        <div class="overlay" />
        <HomeBarberCard noAddress noViewProfile noBoxShadow bgColor="transparent" />
        <section class="booking-info__booking-details">
            <section class="booking-info__booking-details--typeNPrice">
                <section class="type common">
                    Corte masculino
                </section>
                <section class="price common">
                    $3000
                </section>
            </section>

            <section class="booking-info__booking-details--date-info">
                <section class="date highlight common">
                    28/04/2000
                </section>
                <section class="hour highlight common">
                    13:00
                </section>
            </section>
        </section>
    </div>
</template>

<script setup>
import HomeBarberCard from '../Home/HomeBarberCard.vue';

defineProps({
    attended: {
        type: Boolean,
        default: false
    }
})
</script>


<style lang="less" scoped>
@import "@/colors.less";

.booking-info {
    padding: 1.5rem;
    border-radius: 1.1rem;
    background-color: white;
    width: 100%;
    position: relative;
    overflow: hidden;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background: rgba(0, 0, 0, 0.4);
    }

    &__booking-details {
        .common {
            font-size: 1.4rem;
            font-weight: 600;
        }

        &--typeNPrice {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        &--date-info {
            display: flex;
            justify-content: space-between;

            .highlight {
                background-color: @principalDark;
                padding: 1rem;
                border-radius: 0.6rem;
                color: @colorWhite;
            }
        }
    }
}
</style>