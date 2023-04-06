const prac = document.querySelector('.first-class');
prac.addEventListener('click', ()=>{
    const newContent = document.createTextNode("Hi there and greetings!");
    prac.appendChild(newContent);
})