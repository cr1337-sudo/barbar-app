<template>
    <img :src="PROPimageURL" alt="" :class="[medium && 'medium']"/>
</template>

<style lang="less" scoped>
img {
    border-radius: 1.3rem;
    height: 8.5rem;
    width: 8.5rem;

    &.medium {
        height: 7rem;
        width: 7rem;
    }
}
</style>
<script setup>
defineProps({
    medium: Boolean
})
const PROPimageURL = 'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
</script>
