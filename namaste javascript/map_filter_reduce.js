
const arr = [8,1,3,2,6];


//********** map *******
//Dobule = [10, 2, 6, 4, 12];

// triple = [15, 3,9, 6, 10];

// Binary = ["101", "1", "11", "10", "110"]

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}
// const output = arr.map(double);
// console.log(output);

// const output = arr.map(triple);
// console.log(output);


// convert number to binary
const output = arr.map(function binary(x){
    return x.toString(2);
});
// console.log(output);

//************** filter function ******

// take only odd value
function isOdd(x){
    return x%2;
}
const print = arr.filter(isOdd);
console.log(print);

// Or
const show = arr.filter((x) => x%2);
console.log(show);


//**** Reduce function ********

function findSum(arr){
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// this functin iterate with each element
const display = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(display);
// Note:- this take 2 parameter, a function having 2 parameter(acc,curr) and an initializer as 0 or anything stored in (acc)


// (acc, curr) acc=> store the data
// curr => inteate from first element
// (acc,curr) should be named anything as normally we do with parameter: like (max,currElem)

// find maximum element using reduce
const dikhao = arr.reduce(function(acc, curr){
    if(curr >= acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log(dikhao);








// *********** Again with few expamles of Maps function *****

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "alok", lastName: "kumar", age: 75},
    {firstName: "shivam", lastName: "kumar", age: 50},
    {firstName: "aditya", lastName: "sinha", age: 26},
];

// list of full names
const  userFullname = users.map((x) => x.firstName +" "+ x.lastName);
console.log(userFullname);


// *********** reduce examples *********
// no. of times sameage group people present
// {26: 2, 50: 1, 75: 1}

const sameAge = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});  // initially empty object as second parameter

console.log(sameAge);

// **************** filter examples **********

const lessAge = users.filter((x) => x.age < 30);
console.log(lessAge); // show a whole object 

// better
const lessAgeName = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(lessAgeName); // show only name of that person
