
class Counter {
    constructor(element,value){
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.decreaseBtn = element.querySelector('.decrease');
        this.increaseBtn = element.querySelector('.increase');
        this.valueDom = element.querySelector('.value');
        this.valueDom.textContent = this.value;
       // this.increase = this.increase.bind(this);
        //this.decrease = this.decrease.bind(this);
        //this.reset = this.reset.bind(this);
        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }

    increase = () => {
        this.value++;
        this.valueDom.textContent = this.value;
    }

    decrease = () => {
        this.value--;
        this.valueDom.textContent = this.value;
    }

    reset = () => {
        this.value = 0
        this.valueDom.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);



function getElement(selector){
    const element = document.querySelector(selector);
    if(element){
        return element;
    }
    throw new Error(`Please check selector "${selector}"`)
}
