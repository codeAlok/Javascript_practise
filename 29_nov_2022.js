// Q1. Check whether provided values is an array or not

var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3resource'));  //false
console.log(is_array([1, 2, 4, 0]));    // true

// Q2. output odd/even with values in js
for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}
// Output
// 0 is even
// 1 is odd
// 2 is even
// 3 is odd  ......


// Q3. remove specifed element from left of array
function removeFromLeft(arr, n = 1) {
    return arr.slice(n);
}
console.log(removeFromLeft([1, 2, 3]));
console.log(removeFromLeft([1, 2, 3], 1));
console.log(removeFromLeft([1, 2, 3], 2));
console.log(removeFromLeft([1, 2, 3], 4));

// Output
//  [2,3]
// [2,3]
// [3]
// []


// Q4. find time taken by a function to execute
const time_taken = callback => {
    const result = callback();
    return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(2, 10)) + " ms");
console.log("Time taken: " + time_taken(() => Math.sqrt(225)) + " ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6))) + " ms");

// Output
// Time taken: 1024 ms
// Time taken: 15 ms
// Time taken: 7.810249675906654 ms

