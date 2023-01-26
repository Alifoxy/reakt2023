import {axiosRequest} from "../../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getTodos = {
    getAll: () => axiosRequest.get(urls.posts),
    addPosts: (post) => axiosRequest.post(urls.posts, post),
}