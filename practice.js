const obj = {
    name: 'mac',
    getThis(){
        return this;
    }
}
// console.log(obj.getThis());

const globalObject = this;

const arr =() =>{
    return obj.getThis()
}
console.log(arr());