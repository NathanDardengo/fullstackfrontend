import axios from 'axios';

const api = axios.create({
    baseURL : procces.env.REACT_APP_API_URL
});

export default api;