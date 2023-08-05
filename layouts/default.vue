<template>
    <Header />
    <div class="container">
        <span class="bg-round bg-round--top"></span>
        <span class="bg-round bg-round--right"></span>
        <span class="bg-round bg-round--left"></span>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.container {
    @include devices(mobile) {
        overflow-x: hidden;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            width: calc(100% + 2px);
            height: 24px;
            top: 0;
            left: -1px;

            border-radius: 24px 24px 0px 0px;
            border-top: 2px solid #1b3d5e;
            border-right: 1px solid #1b3d5e;
            border-left: 1px solid #1b3d5e;
        }
    }
}
.bg-round {
    position: fixed;
    width: 56.4vw;
    aspect-ratio: 1;
    border-radius: $borderRound;
    background-color: $primary;
    filter: blur(300px);
    z-index: -1;
    transform: scale(1); //fix filter property to Safari

    // .bg-round--top
    &--top {
        top: -46.9vw;
        left: 0;
    }

    // .bg-round--right
    &--right {
        top: 26.7vw;
        right: -45.9vw;
    }

    // .bg-round--left
    &--left {
        top: 73.1vw;
        left: -47.7vw;
    }

    @include devices(mobile) {
        width: 150vw;
        filter: blur(100px);

        // .bg-round--top
        &--top {
            top: -143vw;
            left: calc(50% - 75vw);
        }

        // .bg-round--right
        &--right {
            top: 23.7vw;
            right: -132.2vw;
        }

        // .bg-round--left
        &--left {
            top: 93.1vw;
            left: -132.2vw;
        }
    }
}
</style>
