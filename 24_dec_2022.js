// Q1. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
 console.log(middle_three('abcdefg'));
 console.log(middle_three('HTML5'));
 console.log(middle_three('Python'));
 console.log(middle_three('PHP'));
 console.log(middle_three('Exercises'));

// Q2. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers 


 function first_last_same(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}

console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20]));