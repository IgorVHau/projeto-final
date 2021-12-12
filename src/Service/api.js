import axios from "axios";

const api = axios.create({
    baseURL: 'https://ecommerce-residencia.herokuapp.com'
});

api.interceptors.request.use(function(config) {
    const token = 'huehaihauhoehuahiohoa';
    // Se o token existe
    if (token) {
        config.headers.Authorization = token;
    }
    // Operação feita antes da requisição ser enviada
    return config;
}, function(error) {
    return Promise.reject(error);
}) 

export default api;