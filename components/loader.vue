<!-- здесь конечно же можно поиграться и сделать красивый лоадер -->
<!-- но сейчас здесь речь только о функционале -->
<template>
    <div class="request-status" v-if="status === ERequestStatus.LOADING">
        Loading..
    </div>
    <div class="request-status" v-if="status === ERequestStatus.ERROR">
        Error
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    status: string;
}>();
</script>

<style lang="scss" scoped>
.request-status {
    @include fontSize(20, 40);
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 56px;
}
</style>
