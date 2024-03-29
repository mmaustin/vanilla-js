// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');


export const addToCart = (id) => {
  let item = cart.find(cartItem => cartItem.id === id);
  if(!item){
    let product = findProduct(id);
    product = {...product, amount: 1};
    cart = [...cart, product];
    
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find(value => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  
  displayCartItemCount();
  displayCartTotal();
  setStorageItem('cart', cart);
  openCart();
};

function displayCartItemCount(){
  console.log(cart);
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
  //console.log(amount);
}

function displayCartTotal(){
  let total = cart.reduce((total, cartItem) => {
    return total += cartItem.price * cartItem.amount;
  },0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`
}

function displayCartItemsDom() {
  cart.forEach(cartItem => {
    addToCartDOM(cartItem);
  })  
}

function increaseAmount(id) {
  let newAmount;
  cart = cart.map(cartItem => {
    if(cartItem.id === id){
      newAmount = cartItem.amount + 1;
      cartItem = {...cartItem, amount: newAmount};
    }
    return cartItem;
  });
  return newAmount;
}

function setupCartFunctionality() {

}

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDom();
  setupCartFunctionality();
}
init();