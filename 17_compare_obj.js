// Q1. Compare two ojects

// type 1
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true

console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false

console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// type 2
const equal = (user1, user2) => {
    return (JSON.stringify(Object.values(user1)) === JSON.stringify(Object.values(user2)))
    }
    
    console.log(equal( {nome:"victor", idade: 36},{nome: "victor", idade: 36})); // true
    
    console.log(equal({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // false
    
    console.log(equal({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
    
    console.log(equal({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
    
    console.log (equal({ hair: 'long', beard: true }, { hair: 'long', beard: true, age: 9 })); // false


    // type 3
    let user1 = {nome : "victor", idade: 34};
    let user2 = {nome : "victor", idade: 34};

    let eq = JSON.stringify(user1)===JSON.stringify(user2);
    
    console.log(eq);