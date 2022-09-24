import axios from 'axios';

let url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = `http://` + window.location.host + `/api/`
} else {
  url = `https://` + window.location.host + `/api/`
}

export default axios.create({
  baseURL: url
});
