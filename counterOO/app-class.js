
class Counter {
    constructor(element,value){
        this.counter = element;
        this.value = value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);


function getElement(selector){
    const element = document.querySelector(selector);
    if(element){
        console.log(element);
        return element;
    }
    throw new Error(`Please check selector "${selector}"`)
}
