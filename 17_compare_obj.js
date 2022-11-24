// Q1. Compare two ojects

// type 1
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true

console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false

console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// // type 2
// const eqObj = (obj1, obj2) => {
//     for (let key in obj1) {
//         if (obj2.hasOwnProperty(key)) {
//             continue;
//         } else { return false }
//     }
    
//     let o1 = Object.values(obj1);
//     let o2 = Object.values(obj2);
//     let i = 0; debugger; let check;
//     for (let x = 0; x < o1.length; x++) {
//         check = o1[x] === o2[i];
//         i++;
//     }
//     return check
// }

// console.log(eqObj({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true

// console.log(eqObj({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false

// console.log(eqObj({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false