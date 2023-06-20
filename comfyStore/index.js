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

