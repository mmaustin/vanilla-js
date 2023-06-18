let count = 0;

let btns = document.querySelectorAll('.btn');
let val = document.querySelector('#value');
let self = document.getElementById('self')
console.log(self);

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
// const o = {
//     name: 'me',
//     time: 'now',
//     obj: {
//     name: 'mac',
//     getThis(){
//         return this;
//     }
// }}
// // console.log(obj.getThis());

// // const globalObject = this;

// // const arr =() =>{
// //     return obj.getThis()
// // }
// console.log(o.obj.getThis());