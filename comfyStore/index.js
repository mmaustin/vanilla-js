// import http from "http";
// import fs from 'fs';

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('index.html', null, function(error, data){
    
//     if(error){
//       res.writeHead(404);
//       res.write('file not found');
//     } else {
//       res.write(data);
//     }
//     res.end();
    
//   })
// }).listen(3000)

// console.log('listening');



// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
//specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

// const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
//'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
// const singleProductUrl =
//   'https://course-api.com/javascript-store-single-product'


// const getElement = (selection) => {
//   const element = document.querySelector(selection)
//   if (element) return element
//   throw new Error(`Please check "${selection}" selector, no such element exist`)
// }

// const formatPrice = () => {}

// const getStorageItem = () => {}
// const setStorageItem = () => {}

// const toggleNav = getElement('.toggle-nav');
// const sidebarOverlay = getElement('.sidebar-overlay');
// const closeBtn = getElement('.sidebar-close');

// toggleNav.addEventListener('click', ()=> {
//   sidebarOverlay.classList.add('show');
// })

// closeBtn.addEventListener('click', ()=> {
//   sidebarOverlay.classList.remove('show');
// })