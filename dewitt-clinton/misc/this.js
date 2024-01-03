
const ahmad = {
  firstName: 'Ahmad',
  lastName: 'Jamal',
  thisIs: function () {
    return this;
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  thisArrow: () => {
    return this
  }
};

// console.log(ahmad.thisIs());
// console.log(ahmad.fullName());
// console.log(ahmad.thisArrow());


// const globalThisValue = () => globalThis.//Object.keys(globalThis);
// console.log(globalThisValue());


apple();

const apple = () => {
  return 'apple';
};

