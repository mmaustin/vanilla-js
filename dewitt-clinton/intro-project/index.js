

let input = document.querySelector('.first-input');
let button = document.querySelector('button');

button.addEventListener('click', (e) => {
  console.log(e.target, input.value);
})
