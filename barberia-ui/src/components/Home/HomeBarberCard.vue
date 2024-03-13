<template>
    <div class="barber-card" :style="{background: bgColor, boxShadow: noBoxShadow && 'none' }">
        <section class="barber-card__photo-container">
            <BarberImage/>
        </section>
        <section class="barber-card__barber-info" :style="{justifyContent: justifyContent}">
            <span class="barber-name">
                {{ PROPbarberName }}
            </span>
            <span class="barber-shop-direction">Fake Av. 123</span>
            <button v-if="!noViewProfile" class="view-profile-button">
                Ver Perfil
            </button>
        </section>
    </div>
</template>
<style lang="less" scoped>
@import "@/colors.less";

.barber-card {
    background-color: @colorWhite;
    height: 12rem;
    height: 100px;
    border-radius: 1.3rem;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: row;

    &__photo-container {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 1.3rem;
            height: 8.5rem;
            width: 8.5rem;
        }
    }

    &__barber-info {
        width: 65%;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 1.6rem;

        .barber-name {
            font-weight: 600;
            font-size: 1.5rem;
        }

        .view-profile-button {
            padding: 0.5rem;
            width: 8rem;
            font-size: 1.2rem;
            font-weight: 500;
            background-color: transparent;
            color: @principalDark;
            border: 0.15rem solid @principalSoft;
            border-radius: 1rem;
        }
    }
}
</style>

<script setup>
import BarberImage from '../BarberImage.vue';

defineProps({
    bgColor: {
        type: String,
    },
    noBoxShadow: {
        type: Boolean
    },
    noViewProfile: {
        type: Boolean
    },
    justifyContent: {
        type: String
    }
})


const PROPimageURL = 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
const PROPbarberName = 'Juan Pablo Sorín'
const PROPbgColor = 'white'
</script>