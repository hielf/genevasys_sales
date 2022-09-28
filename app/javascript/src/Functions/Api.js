import axios from 'axios';

let url;

url = window.location.protocol + `//` + window.location.host + `/api/`

export default axios.create({
  baseURL: url
});
