<template>
    <div class="wrapper">
        <h1 class="title">Start connecting your world</h1>
        <h5 class="subtitle">
            Save time and money by making the internet work for you! We believe
            you might like...
        </h5>
        <Loader :status="requestStatus" />
        <ProductsList v-if="requestStatus === ERequestStatus.SUCCESS" />
        <Form v-if="requestStatus === ERequestStatus.SUCCESS" />
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store";

const store = useProductsStore();

store.getProductsListApi();

const requestStatus = computed(() => store.getRequestStatus);
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
    @include fontSize(24, 72);
    font-weight: 900;
    line-height: 100%;
    text-transform: uppercase;
    margin: 94px 0 8px;
    text-wrap: balance;
    @include devices(mobile) {
        margin: 64px 0 8px;
    }
}
.subtitle {
    text-align: center;
    @include fontSize(13, 16);
    font-weight: 400;
    line-height: 100%;
    margin: 0 0 80px;
    text-wrap: balance;

    @include devices(mobile) {
        margin: 0 0 62px;
    }
}
</style>
