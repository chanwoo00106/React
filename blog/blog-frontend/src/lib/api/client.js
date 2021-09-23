import axios from 'axios';

const client = axios.create({
    baseURL: "http://localhost:8000",
    Headers: { "Access-Control-Allow-Origin": "*" }
})

export default client;