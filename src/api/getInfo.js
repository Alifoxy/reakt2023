import { axiosRequest } from "../axios/axiosConfig";
import { requestEndpoints } from "./endpoints";

export const getUsers = {
    getAll: () => axiosRequest.get(requestEndpoints.users),
    createUser: (data) => axiosRequest.post(requestEndpoints.users, data),
}