import axios from 'axios';

// key: minha key que foi gerada, não coloquei aqui para subir no github por motivos de segurança.

// base url: https://api-ssl.bitly.com/v4/

export const key = ""; // dentro das aspas colocar a key que foi gerada, não coloquei aqui para subir no github por motivos de segurança.

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
    }
})

export default api;

