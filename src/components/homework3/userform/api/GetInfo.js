export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
}
export const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments').then(resp => resp.json());
}