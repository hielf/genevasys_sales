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

// import axios from 'axios';
//
// export const getProducts = async () => {
//   let response;
//
//   try {
//     // response = await axios.get(url, config);
//     response = await axios.get(`http://localhost:3000/api/products`)
//       // .then((res) => {
//       //   response = res.data
//       // })
//   } catch (e) {
//     // catch error
//     throw new Error(e.message)
//   }
//
//   console.log(response.data.data.products)
//
//   // if success return value
//   return response.data.data.status == 0 ? response.data.data.products : null // or set initial value
// }

export async function getProducts() {

    try{
        const response = await fetch('http://localhost:3000/api/products');
        return await response.json();
    }catch(error) {
        return [];
    }

}
