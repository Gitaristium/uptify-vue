<template>
    <NuxtLink :to="item.url">
        <article class="click-item">
            <img :src="item.img" :alt="item.name" />
            <h5 class="title">{{ item.name }}</h5>
        </article>
    </NuxtLink>
</template>

<script setup lang="ts">
import { TProduct } from "utils/types";

const props = defineProps<{
    item: TProduct;
}>();
</script>

<style lang="scss" scoped>
article {
    position: relative;
    width: 100%;
    max-width: 310px;
    aspect-ratio: 1.29165;
    border-radius: $borderRadius;
    background: $backgroundItem;
    padding: 24px;

    @include devices(tablet) {
        padding: 16px;
        aspect-ratio: 1;
    }

    @include hover {
        // article:hover
        &:hover {
            background: $primary;
        }
    }
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    @include devices(mobile) {
        width: 40%;
    }
}
.title {
    @include fontSize(13, 20);
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.2px;
    margin: 0;
    text-align: center;
    margin-top: 70%;
}
</style>
