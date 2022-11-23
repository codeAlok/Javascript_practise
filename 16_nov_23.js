
// Q1. Sum of power of given number in array
function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--)
        sum += Math.pow(array[i], 2);
    return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4]));

//Q2. sum and product of given numbers
const array = [1, 2, 3, 4, 5, 6];
let s = 0;
let p = 1;
let i;
for (i = 0; i < array.length; i += 1) {
    s += array[i];
    p *= array[i];
}
console.log(`Sum : ${s} Product :  ${p}`); 