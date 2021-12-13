import axios from 'axios';
const baseUrl = 'https://ecommerce-residencia.herokuapp.com';

export async function getProducts() {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/produto`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}

export async function getProduct(id) {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/produto/${id}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}

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