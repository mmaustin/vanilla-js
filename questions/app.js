

const btns = document.querySelectorAll('.question-btn');
//Dom traversal solution
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let parent = e.currentTarget.parentElement.parentElement;
        parent.classList.toggle('show-text');
    })
})