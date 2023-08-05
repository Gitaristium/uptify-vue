<template>
    <FormInput name="search" placeholder="Search Services" v-model="filter" />

    <div class="products" v-if="productsFiltered.length">
        <ProductsElement
            v-for="(product, index) in productsFiltered"
            :item="product"
            :key="index"
        />
    </div>
    <div class="empty" v-if="!productsFiltered.length">No matches</div>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store";
import { TProduct } from "utils/types";

const store = useProductsStore();

const filter = useState("filter", () => "");

const products = computed(() => store.getProductsList);

const productsFiltered = computed(() =>
    filter.value !== ""
        ? products.value.filter((el: TProduct) =>
              el.name.toLowerCase().includes(filter.value.toLowerCase())
          )
        : products.value
);
</script>

<style lang="scss" scoped>
.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin-bottom: 56px;

    @include devices(tablet) {
        grid-template-columns: repeat(2, 1fr);
    }
}
.empty {
    @include fontSize(20, 40);
    font-weight: 600;
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
