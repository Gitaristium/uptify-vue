<template>
    <button type="button" class="click-item">Close</button>
</template>

<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: $backgroundItem;
    color: #fff;
    @include fontSize(13, 16);
    line-height: 100%;
    font-weight: 700;
    text-transform: uppercase;

    @include hover {
        // button:hover
        &:hover {
            background: $primary;
        }
    }
}
</style>
