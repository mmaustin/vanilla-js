

let listItem = document.querySelector('.first-input');
let button = document.querySelector('button');
let container = document.querySelector('.attach');

button.addEventListener('click', function () {
  let para = document.createElement('p');
  para.innerHTML = listItem.value;
  para.classList.add('para-styles');
  container.appendChild(para);
  listItem.value = '';

  para.addEventListener('click', function () {
    para.style.color = 'red';
    para.style.textDecoration = 'line-through';
  });

  para.addEventListener('dblclick', function () {
    para.remove();
  })
})
