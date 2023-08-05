export type TProduct = {
    id: number;
    name: string;
    img: string;
    url: string;
};

export enum ERequestStatus {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export enum ERequestMethod {
    GET = "get",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
    DELETE = "delete",
}
