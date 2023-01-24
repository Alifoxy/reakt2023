export const getLaunchesData = () => {
    return fetch('http://jsonplaceholder.typicode.com/users').then(resp => resp.json());
}
