// Q1. Compare two ojects

const matches = (obj1, obj2) => {
    Object.keys(obj2).every(key => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]);
}
  

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true

console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false

console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false