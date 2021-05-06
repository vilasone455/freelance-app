import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://freelance-api.herokuapp.com',
    timeout: 3000,
}); 