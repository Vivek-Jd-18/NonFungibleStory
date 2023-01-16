import axios from 'axios';
const API_ENDPOINT = "https://api.rytr.me/v1/";



export default axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    'Authentication':"Bearer -X80CBU0FQZYIS0GP-NCW"
  },
});
