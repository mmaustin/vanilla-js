//Objects are the only non-primitve data types in JS
//They can be thought of as cabinets where you store information in key/value pairs
//Internally keys are strings, but you don't necessarily have to create them as strings unless you're creating a property via bracket notation--and other instances

//creating an object
let obj1 = new Object(); //object constructor

let obj2 = {}; // object literal


//adding properties: directly, dot notation, bracket notation

let greatestRappers = {
  one: "Rakim",
  two: "Jay-Z"
};

greatestRappers.three = "Big Daddy Kane";
greatestRappers["four"] = "KRS-One"

//accessing values: dot notation, bracket notation

console.log(greatestRappers["three"]);









function a() {
  return 'ample'
}

function b(c) {
  return c;
}

console.log(b(a()));