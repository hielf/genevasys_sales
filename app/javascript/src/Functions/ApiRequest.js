// import { useEffect, useState } from 'react';
// import axios from 'axios';
//
// export const useAxios = (url) => {
//   const [state, setState] = useState({});
//
//   useEffect(() => {
//     axios
//        .get(url)
//        .then(({ data }) => setState({ data }))
//        .catch(error => setState({ error }));
//   }, []);
//
//   console.log(state);
//
//   return state;
// }

// import React from 'react';
import axios from 'axios';
import Api from './Api'

export const apiGet = async (uri, params) => {
  let response;

  try {
    response = await Api.get(uri, params);
  } catch (e) {
    // catch error
    throw new Error(e.message)
  }

  // console.log(response)

  // if success return value
  return response?.data ? response?.data.data : null
}

export const apiPost = async (uri, params) => {
  let response;

  try {
    response = await Api.post(uri, params);
  } catch (e) {
    // catch error
    throw new Error(e.message)
  }

  // console.log(response)

  // if success return value
  return response?.data ? response?.data : null
}
