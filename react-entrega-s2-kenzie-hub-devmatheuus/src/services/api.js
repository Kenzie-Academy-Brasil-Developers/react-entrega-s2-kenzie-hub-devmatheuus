import axios from 'axios';

const BASE_URL = 'https://kenziehub.herokuapp.com';

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 15000
});
export default API;
