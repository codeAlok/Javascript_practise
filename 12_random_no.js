
// Q. Write a program to get random number between a given range .
//ex:- (1, 5) = 2 random number

const random_Number_In_Range = (min, max) => Math.random() * (max - min) + min;

console.log(random_Number_In_Range(2, 10));
console.log(random_Number_In_Range(1, 5));
console.log(random_Number_In_Range(-5, -2));
console.log(random_Number_In_Range(0, 1));