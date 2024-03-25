<template>
    <div class="navigation-main">

        <section class="back" v-if="!noPrevious" @click="backAction">
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
    backAction: Function,
    type: {
        type: String,
        required: true
    },
    placeholder: String,
    text: String,
    noPrevious: Boolean
})

</script>

<style scoped lang="less">
@import "@/colors.less";

.navigation-main {
    display: flex;
    width: 100%;
    height: 6rem;
    padding: 1.2rem 1rem;
    align-items: center;
    position: sticky;
    top: 0;
    background: @principalSoft;

    .back {
        margin-right: 1rem;
    }

    .section {
        display: flex;
        justify-content: left;
        flex: 1;

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