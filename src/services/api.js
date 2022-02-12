import axios from 'axios';
const BASE_URL = 'http://10.0.0.107:5000/soundbytes';

async function getAllItens() {

  const promise = await axios.get(`${BASE_URL}/itens`);
  return promise;
}


function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body) {

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

async function getUserAccount(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/account`, config)

  return promise
}

async function getUserPayment(token, id) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/account/payment/${id}`, config)

  return promise
}

async function setUserPayment(token, id, body) {

  const config = createConfig(token);

  const promise = axios.put(`${BASE_URL}/account/payment/${id}`, body, config)

  return promise
}

async function getUserAddress(token, id) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/account/address/${id}`, config)

  return promise
}

async function setUserAddress(token, id, body) {

  const config = createConfig(token);

  const promise = axios.put(`${BASE_URL}/account/address/${id}`, body, config)

  return promise
}

const api = {
  getAllItens,
  getCategoryItens,
  createConfig,
  signIn,
  signUp,
  getUserAccount,
  getUserPayment,
  setUserPayment,
  getUserAddress,
  setUserAddress,
}

export default api;