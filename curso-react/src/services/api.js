import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44378',
})

export default api;