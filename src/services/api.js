import axios from 'axios';

const BASE_URL = 'http://10.0.0.107:5000/soundbytes';

async function getAllItens() {

  const promise = await axios.get(`${BASE_URL}/itens`);

  return promise;
}

async function getCategoryItens(name) {

  const promise = await axios.get(`${BASE_URL}/category/${name}`);

  return promise;
}


const api = {
  getAllItens,
  getCategoryItens,
}

export default api;