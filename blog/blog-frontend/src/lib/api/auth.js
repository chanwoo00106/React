import client from "./client";

export const login = ({ username, password }) => 
    client.post('/api/auth/login', {username, password});

export const register = ({ username, password }) => 
    client.post('/api/auth/register', { username, password }, {Headers: {"Access-Control-Allow-Origin": "http://localhost:3000"}});

export const check = () => client.get('/api/auth/check');