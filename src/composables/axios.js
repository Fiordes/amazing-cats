import axios from 'axios';
const API_KEY = '1ff8dcc1-355f-46b9-ad9c-30e1ed3a8797';

export const axiosRequest = axios.create({
    baseUrl: 'https://api.thecatapi.com/',
    headers: {
        'x-api-key': API_KEY
    }
});
