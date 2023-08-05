<template>
    <span :for="name" class="input-wrapper">
        <input
            type="text"
            :id="name"
            :name="name"
            :placeholder="placeholder"
            :class="{ search: isSearch }"
            v-model="value"
        />
    </span>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string;
    placeholder: string;
    modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

const isSearch = computed(() => (props.name === "search" ? true : false));
</script>

<style lang="scss" scoped>
.input-wrapper {
    position: relative;
    display: block;

    // .input-wrapper:has(> .search)::before
    &:has(> .search)::before {
        position: absolute;
        content: "";
        background: url(/img/search-icon.svg) no-repeat center / cover;
        top: calc(50% - 10px);
        left: 30px;
        width: 20px;
        aspect-ratio: 1;

        @include devices(mobile) {
            top: calc(50% - 8px);
            left: 20px;
            width: 16px;
        }
    }
}

input {
    display: flex;
    align-items: center;
    border-radius: $borderRadius;
    border: none;
    outline: 0px solid $primary;
    outline-offset: -2px;
    background: $backgroundItem;
    @include headerHeight;
    width: 100%;
    padding: 0 30px;
    margin-bottom: 32px;
    color: $text;
    @include fontSize(13, 16);
    font-weight: 400;
    line-height: 100%;
    outline: none;

    @include devices(mobile) {
        padding: 0 20px;
        margin-bottom: 24px;
    }

    // .input::placeholder
    &::placeholder {
        color: $placeholder;
    }

    // .input.search
    &.search {
        @include fontSize(13, 20);
        line-height: 120%;
        letter-spacing: -0.2px;
        border: 2px solid rgba(255, 255, 255, 0.08);
        background: transparent;
        padding-left: 72px;

        @include devices(mobile) {
            padding-left: 48px;
        }
    }

    // .input:focus
    &:focus {
        outline: 2px solid $primary;
    }
}
</style>
