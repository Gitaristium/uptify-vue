<template>
    <span class="burger click-item">
        <span class="line line--top"></span>
        <span class="line line--bottom"></span>
    </span>
</template>

<style lang="scss" scoped>
.burger {
    @include headerHeight;
    aspect-ratio: 1;
    border-radius: $borderRound;
    overflow: hidden;
    background: $backgroundItem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 6px;
    padding: 18px;

    @include devices(mobile) {
        padding: 0;
        height: 28px;
        background: no-repeat;
    }
    // .burger .line
    & .line {
        background-color: $text;
        width: 100%;
        height: 2px;
        transition: width 0.2s;

        // .burger .line--bottom
        &--bottom {
            width: 50%;
        }
    }

    @include hover {
        // .burger:hover
        &:hover {
            background: $primary;

            // .burger:hover .line
            & .line {
                // .burger:hover .line--top
                &--top {
                    width: 50%;
                }

                // .burger:hover .line--bottom
                &--bottom {
                    width: 100%;
                }
            }
        }
    }
}
</style>
