

let listItem = document.querySelector('.first-input');
let button = document.querySelector('button');
let container = document.querySelector('.attach');

button.addEventListener('click', (e) => {
  const para = document.createElement('p');
  para.innerHTML = listItem.value;
  container.appendChild(para);
  listItem.value = '';


})
