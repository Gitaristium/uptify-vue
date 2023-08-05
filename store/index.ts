import { defineStore } from "pinia";
import { TProduct } from "@/utils/types";
import { ERequestStatus, ERequestMethod } from "@/utils/types";
import { roductsList } from "@/utils/products-list";
import { API_PRODUCTS } from "@/utils/api";

interface State {
    products: TProduct[];
    requestStatus: string;
}

export const useProductsStore = defineStore("products", {
    state: (): State => {
        return {
            products: [],
            requestStatus: "",
        };
    },
    getters: {
        getProductsList: (state): TProduct[] => state.products,
        getRequestStatus: (state): string => state.requestStatus,
    },

    actions: {
        async getProductsListApi() {
            this.requestStatus = ERequestStatus.LOADING;
            await requestApi(ERequestMethod.GET, API_PRODUCTS)
                .then((res) => {
                    this.requestStatus = ERequestStatus.SUCCESS;
                    // тут пока что подменяем левые данные с FAKE-API на свои
                    // this.products = res.data.products;
                    this.products = roductsList;
                })
                .catch((error) => (this.requestStatus = ERequestStatus.ERROR));
        },
    },
});
