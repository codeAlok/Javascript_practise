// compare both array and insert element that is not matches in both array in a new array

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

let newArray = diffArray([1,2,3,5], [1, 2, 4, 4, 5]);

console.log(newArray);
