import axios from 'axios';

const BASE_URL = 'http://localhost:5000/soundbytes';

async function getAllItens() {

  const promise = await axios.get(`${BASE_URL}/itens`);

  return promise;
}


const api = {
  getAllItens,

}

export default api;