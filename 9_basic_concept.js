// 1. ways to print in javascript
console.log("hello world");
// alert("me");
document.write("theis is document");

// 2. javascript console api
console.log("hello world", 5 + 6, "Another log");
console.warn("this is warning"); // It is use to show the worning.
console.error("this is error");

// 3. javascript variables
// what are variables? - Container to store data values
var number1 = 34;
var number2 = 55;
console.log(number1 + number2);

// 4. data types in javascript
var str1 = "this is a string";
var str1 = "this is also a string";

//Objects
var marks = {
    ravi: 32,
    shubham: 33,
    ram: 53

}
console.log(marks);

// booleans
var a = true;
var b = false;
console.log(a, b);

// At a very high level, there are two types of data types in javascript
// 1.primitive data types: undefined, null, number, string, boolean, symbol
// 2. Reference data types: arrays and objects

var arr = [1, 2, 3, 4];
console.log(arr);

function avg(a, b) {
    return (a + b) / 2;
}
c = avg(4, 6);
console.log(c);


var arr = [3, 4, 45, 6, 43, 4, 4, 6, 7, 8];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;

    }
    console.log(arr[i]);
}

// easy to itterate in javascript through foreach function
arr.forEach(function (element) {
    console.log(element);
})

// let is a temporary variable in a block.
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

do{
    console.log(arr[j]);
    j++;

}while(j<arr.length);

let myarr = ["fan", "camera", 34, null, true];
// Arrays method
console.log(myarr.length);
myarr.pop();  // pop is use to delete the value from last array.
myarr.push();  // push is use to add the value from last arry.
myarr.shift();  // shift is use to delete the value from the starting array.
myarr.unshift();  // unshift is use to add the value from the starting array. 

myarr.pop();
console.log(myarr);

myarr.push("rahul");
console.log(myarr);

myarr.shift();
console.log(myarr);

myarr.unshift(555);
console.log(myarr);

const newlen=myarr.unshift("hello")
console.log(newlen);