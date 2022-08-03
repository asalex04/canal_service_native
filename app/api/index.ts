import axios from "axios";

const $fetchHost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})


export {$fetchHost}
