
import axios from 'axios'

axios.defaults.baseURL = '/data/';
axios.defaults.timeout = 20000;

axios.interceptors.request.use(
    config => {
        console.log(config);
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    responseData => {
        console.log(responseData);
        return responseData;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axios