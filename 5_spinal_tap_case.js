// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// ex:-    hello-welcome-to-this-world

function spinalCase(str) {

    return str  
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

let newArray = spinalCase('This is Spinal Tap');

console.log(newArray);

//Output:- this-is-spinal-tap