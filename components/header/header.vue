<template>
    <header>
        <div class="container">
            <nav>
                <NuxtLink name="logo" to="/">
                    <HeaderLogo />
                </NuxtLink>

                <NuxtLink name="burger" to="/">
                    <HeaderBurger />
                </NuxtLink>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 24px 0;
    z-index: 10;
    @include devices(tablet) {
        padding: 16px 0;
    }
    @include devices(mobile) {
        padding: 12px 0;
    }
}

nav {
    width: 100%;
    @include headerHeight;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
