import { TProduct } from "./types";

// захардкоженные данные для имитации ответа сервера
export const roductsList = [
    {
        id: 1,
        name: "Google Store",
        img: "/img/products/google-drive.png",
        url: "/",
    },
    { id: 2, name: "Gira", img: "/img/products/gira.png", url: "/" },
    { id: 3, name: "Dropbox", img: "/img/products/dropbox.png", url: "/" },
    {
        id: 4,
        name: "Google My Business",
        img: "/img/products/google-my-business.png",
        url: "/",
    },
    { id: 5, name: "Automate", img: "/img/products/automate.png", url: "/" },
    {
        id: 6,
        name: "Sales Force",
        img: "/img/products/sales-force.png",
        url: "/",
    },
    {
        id: 7,
        name: "Caltrain",
        img: "/img/products/caltrain.png",
        url: "/",
    },
    {
        id: 8,
        name: "Google My Business",
        img: "/img/products/clouds.png",
        url: "/",
    },
    {
        id: 9,
        name: "Intelligent Voice",
        img: "/img/products/intelligent-voice.png",
        url: "/",
    },
] as TProduct[];
