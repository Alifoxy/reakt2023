import {axiosRequest} from "../../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getTodos = {
    getAll: () => axiosRequest.get(urls.todos),
    addTodo: (data) => axiosRequest.post(urls.todos, data),
}

