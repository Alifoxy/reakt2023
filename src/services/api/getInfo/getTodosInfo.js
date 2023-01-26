import {axiosRequest} from "../../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getTodos = {
    getAll: () => axiosRequest.get(urls.todos),
    addTodo: (todo) => axiosRequest.post(urls.todos, todo),
}

