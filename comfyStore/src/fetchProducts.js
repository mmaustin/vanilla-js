import { allProductsUrl } from './utils.js';




const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
