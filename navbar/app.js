

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', ()=>{
    const t = links.classList.contains('show-links');
    //console.log(t);
    // if(t){
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle('show-links')
})