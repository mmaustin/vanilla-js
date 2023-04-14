

//const btns = document.querySelectorAll('.question-btn');
//Dom traversal solution
// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let parent = e.currentTarget.parentElement.parentElement;
//         parent.classList.toggle('show-text');
//     })
// })

//Selectors solution
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', ()=> {
        questions.forEach(item => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text');
    })
})