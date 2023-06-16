function getElement(selector){
    const element = document.querySelector(selector);
    if(element){
        return element;
    }
    throw new Error(`Please check selector "${selector}"`)
}

