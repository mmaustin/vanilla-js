
class Counter {
    constructor(element,value){
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.decreaseBtn = element.querySelector('.decrease');
        this.increaseBtn = element.querySelector('.increase');
        this.valueDom = element.querySelector('.value');
        this.valueDom.textContent = this.value;
    }

    increase(){
        this.value++;
        this.valueDom.textContent = this.value;
    }

    decrease(){
        this.value--;
        this.valueDom.textContent = this.value;
    }

    reset(){
        this.value = this.value
        this.valueDom.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

firstCounter.reset();


function getElement(selector){
    const element = document.querySelector(selector);
    if(element){
        return element;
    }
    throw new Error(`Please check selector "${selector}"`)
}
