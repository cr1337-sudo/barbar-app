<script setup>
defineProps(['action'])
</script>

<template>
    <div class="service-item">
        <section class="service-item__info">
            <p class="service-item__info--service">Corte Masculino</p>
            <p class="service-item__info--price">$3000.00</p>
        </section>
        <section class="service-item__schedule">
            <button class="button" @click="action">Agendar</button>
        </section>
    </div>
</template>

<style lang="less">
@import "@/colors.less";
.service-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 0;

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        width: 70%;

        &--service {
            font-size: 1.4rem;
            font-weight: 600;
            color: @principalDark ;
        }

        &--price {
            font-size: 1.3rem;
            font-weight: 400;
            color: @principalSoft;
        }
    }

    &__schedule {
        display: flex;
        justify-content: flex-end;
        width: 30%;
    }
}
</style>