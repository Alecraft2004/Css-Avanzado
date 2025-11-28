import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000/api',
});

export const registerUser = async (data) => {
  const response = await client.post('/usuarios/register', data);
  return response.data;
};

export const login = async (email, password) => {
  // Endpoint consistente con usuarios/register
  const response = await client.post('/usuarios/login', { email, password });
  return response.data;
};

export const getProductos = async () => {
  const response = await client.get('/productos');
  return response.data;
};

export const getProductosByCategoria = async (slug) => {
  const response = await client.get(`/productos?categoria=${slug}`); 
  return response.data;
};

export const createProducto = async (producto) => {
  const response = await client.post('/productos', producto);
  return response.data;
};

export const getProductosByUsuario = async (vendedorId) => {
  const response = await client.get(`/productos/usuario/${vendedorId}`);
  return response.data;
};

export const updateProducto = async (id, data) => {
  const response = await client.put(`/productos/${id}`, data);
  return response.data;
};

export const deleteProducto = async (id) => {
  const response = await client.delete(`/productos/${id}`);
  return response.data;
};

export default client;
