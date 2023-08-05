import axios, { AxiosError, AxiosResponse } from "axios";

// api url
// фейковые адреса для демонстарции запросов
export const API = "https://jsonplaceholder.typicode.com/";
export const API_PRODUCTS = "photos";

const checkResponse = (res: AxiosResponse) => {
    return res.status === 200
        ? res.data
        : res.data.then((err: AxiosError) => Promise.reject(err));
};

export const requestApi = async (method: string, url: string) => {
    const res = await axios({
        method: method,
        url: API + url,
    });
    return checkResponse(res);
};
