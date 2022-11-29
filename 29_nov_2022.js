// Q1. Check whether provided values is an array or not

var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log(is_array('w3resource'));  //false
console.log(is_array([1, 2, 4, 0]));    // true
