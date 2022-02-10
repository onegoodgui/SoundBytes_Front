
import axios from 'axios';

const BASE_URL = 'http://10.0.0.107:5000/soundbytes';

async function getAllItens() {

  const promise = await axios.get(`${BASE_URL}/itens`);
    return promise;
}

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}  
  
async function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);
  return promise;
}
  
async function getCategoryItens(name) {

  const promise = await axios.get(`${BASE_URL}/category/${name}`);
    return promise;
}


async function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}



const api =  {
    getAllItens,
    getCategoryItens,
    createConfig,
    login,
    signUp,
}

export default api;