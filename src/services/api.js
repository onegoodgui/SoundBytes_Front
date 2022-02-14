import axios from 'axios';
const BASE_URL = 'http://localhost:5000/soundbytes';

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


async function getItem(params) {
  const promise = await axios.get(`${BASE_URL}/item/${params}`);
  return promise
}

async function addToCart(body, config) {
  const promise = await axios.post(`${BASE_URL}/shoppingcart/additems`, body, config);
  return promise
}

async function getCartData(config) {
  const promise = await axios.get(`${BASE_URL}/shoppingcart/qty`, config);

  return promise
}

async function getShoppingCart(config){

  const promise = await axios.get(`${BASE_URL}/shoppingcart`, config);

  return promise
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

async function getShoppingCard(token) {

  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/shoppingcart`, config)

  return promise

}


async function setShoppingCart(token, body) {

  const config = createConfig(token);

  const promise = axios.put(`${BASE_URL}/shoppingcart`, body, config)

  return promise

}

const api = {
  getAllItens,
  getCategoryItens,
  getItem,
  createConfig,
  signIn,
  signUp,
  addToCart,
  getCartData,
  getShoppingCart,
  getUserAccount,
  getUserPayment,
  setUserPayment,
  getUserAddress,
  setUserAddress,
  getShoppingCard,
  setShoppingCart,
}

export default api;