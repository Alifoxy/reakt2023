import { axiosRequest } from "../axios/axiosConfig";
import { urls } from "./endpoints";

export const getUsers = {
    getAll: () => axiosRequest.get(urls.users),
    createUser: (newUser) => axiosRequest.post(urls.users, newUser),
}