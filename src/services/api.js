import axios from 'axios';
const BASE_URL = 'http://localhost:5000/soundbytes';

const instance = axios.create({
  withCredentials: true
  
  })

async function getAllItens() {

  const promise = await instance.get(`${BASE_URL}/itens`);
  return promise;
}


function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body) {

  const promise = instance.post(`${BASE_URL}/auth/sign-in`, body);
  return promise;
}

async function getCategoryItens(name) {

  const promise = await instance.get(`${BASE_URL}/category/${name}`);

  return promise;
}


async function signUp(body) {
  const promise = instance.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}


async function getItem(params) {
  const promise = await instance.get(`${BASE_URL}/item/${params}`);
  return promise
}

async function addToCart(body, config) {
  const promise = await instance.post(`${BASE_URL}/shoppingcart/additems`, body, config);
  return promise
}

async function updateCart(body, auth) {
  const config = createConfig(auth);
  const promise = await instance.post(`${BASE_URL}/shoppingcart/updateCart`, body, config);
  return promise
}

async function getCartData(config) {
  const promise = await instance.get(`${BASE_URL}/shoppingcart/qty`, config);

  return promise
}

async function getShoppingCart(config){

  const promise = await instance.get(`${BASE_URL}/shoppingcart`, config);

  return promise
}
async function getUserAccount(token) {

  const config = createConfig(token);

  const promise = instance.get(`${BASE_URL}/account`, config)

  return promise
}


async function getUserPayment(token, id) {

  const config = createConfig(token);

  const promise = instance.get(`${BASE_URL}/account/payment/${id}`, config)

  return promise
}

async function setUserPayment(token, id, body) {

  const config = createConfig(token);

  const promise = instance.put(`${BASE_URL}/account/payment/${id}`, body, config)

  return promise
}

async function getUserAddress(token, id) {

  const config = createConfig(token);

  const promise = instance.get(`${BASE_URL}/account/address/${id}`, config)

  return promise
}

async function setUserAddress(token, id, body) {

  const config = createConfig(token);

  const promise = instance.put(`${BASE_URL}/account/address/${id}`, body, config)


  return promise
}

async function getShoppingCard(token) {

  const config = createConfig(token);

  const promise = instance.get(`${BASE_URL}/shoppingcart`, config)

  return promise

}


async function setShoppingCart(token, body) {

  const config = createConfig(token);

  const promise = instance.put(`${BASE_URL}/shoppingcart`, body, config)

  return promise

}

async function orderSuccess(body, token) {

  const config = createConfig(token);
  const promise = await instance.post(`${BASE_URL}/order/success`, body, config);
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
  updateCart,
  getCartData,
  getShoppingCart,
  getUserAccount,
  getUserPayment,
  setUserPayment,
  getUserAddress,
  setUserAddress,
  getShoppingCard,
  setShoppingCart,
  orderSuccess
}

export default api;