let count = 0;

let btns = document.querySelectorAll('.btn');
let val = document.querySelector('#value');
//console.log(Array.from(btns));

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cl = e.currentTarget.classList;
        if(cl.contains('decrease')){
            count--;
        } else if (cl.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count < 0) val.style.color = 'red';
        if(count > 0) val.style.color = 'green';
        if(count === 0) val.style.color = 'black';
        val.textContent = count; 
    })
})