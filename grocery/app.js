const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = '';

form.addEventListener('submit', addItem);

clearBtn.addEventListener('click', clearItems);

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    
    if(value && !editFlag){
        const element = document.createElement('artilce');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-button">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-button">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        list.appendChild(element);

        displayAlert('added item to list', 'success');
        container.classList.add('show-container');
        addToLocalStorage(id, value);
        setBackToDefault()
    } else if(value && editFlag){
        console.log('editing');
    } else {
        displayAlert('please enter a value', 'danger');
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(()=>{
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)  
    }, 2000)
}

function addToLocalStorage(id, value){
    console.log('local storage');
}

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'submit';
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(item => {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'success');
    setBackToDefault();
    //localStorage.removeItem('list);
}