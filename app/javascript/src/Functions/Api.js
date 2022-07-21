import axios from 'axios';

let url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = `http://localhost:3000/api/`
} else {
  url = `http://localhost:3000/api/`
}

export default axios.create({
  baseURL: url
});
