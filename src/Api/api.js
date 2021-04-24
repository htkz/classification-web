import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const Api = axios.create({ baseURL });

export default Api;
