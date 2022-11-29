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

