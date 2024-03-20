<template>
    <div class="navigation-main">

        <section class="back">
            <SvgLoader name="nav-prev" />
        </section>

        <section class="section">
            
            <p class="title" v-if="type === 'text'">
               {{ text }} 
            </p>
            <input v-if="type === 'input'" type="text" :placeholder="placeholder">
           
        </section>
    </div>
</template>

<script setup>
import SvgLoader from './SvgLoader.vue';
defineProps({
    type: {
        type: String,
        required: true
    },
    placeholder: String,
    text: String
})

</script>

<style scoped lang="less">
@import "@/colors.less";

.navigation-main {
    display: flex;
    padding: 1.2rem 0;
    align-items: center;
    position: sticky;
    top: 0;
    background: @principalSoft;

    .section {
        display: flex;
        justify-content: left;
        width: 100%;

        .title {
            font-size: 2.2rem;
            font-weight: 500;
            color: @colorWhite;
        }

        input {
            width: 100%;
            border-radius: 1rem;
            background-color: @principalDark;
            border: none;
            outline: none;
            padding: 0.5rem 0.9rem;
            line-height: 2rem;
            font-size: 1.8rem;
            color: @colorWhite;

            &::placeholder {
                color: darken(@colorWhite, 20%);
            }
        }

    }
}
</style>