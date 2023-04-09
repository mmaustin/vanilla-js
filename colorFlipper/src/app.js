class MakeName {
    constructor(name){
        this.name = name;
    }
}


const colors = ['green', 'red', 'rgb(133,122,200', '#fi5025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const b = document.querySelector('.bbb');

btn.addEventListener('click', ()=>{
    const randomNumber = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

b.addEventListener('click', ()=> {
    let calledClass = new MakeName('Marco')
    document.querySelector('.yy').textContent += calledClass.name;
})