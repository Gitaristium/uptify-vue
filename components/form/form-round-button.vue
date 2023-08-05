<template>
    <button :type="type" class="click-item">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string;
    type: "button" | "submit";
}>();
</script>

<style lang="scss" scoped>
button {
    width: 256px;
    aspect-ratio: 1;
    border-radius: $borderRound;
    background: $backgroundItem;
    border: none;
    outline: none;
    color: $text;
    text-align: center;
    text-wrap: balance;
    @include fontSize(20, 40);
    font-weight: 900;
    line-height: 100%;
    letter-spacing: -0.4px;
    text-transform: uppercase;
    margin: 56px auto 112px;
    display: block;

    @include devices(mobile) {
        width: 180px;
        margin: 56px auto 32px;
    }

    @include hover {
        // button:hover
        &:hover {
            background: $primary;
        }
    }
}
</style>
