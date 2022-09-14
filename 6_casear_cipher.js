// decrypt the given string by changing the current letter + 13 , the letter present after 13th position next from current letter.

// don't change _ or other symbols , keep as it is, only change alphabets

function rot13(str) {
  
    var rotCharArray = [];
    var regEx = /[A-Z]/;
  
    str = str.split("");
  
    for (var x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      }
      else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }
  
  let newString = rot13("SERR PBQR PNZC");

  console.log(newString);

  //OUTPUT: FREE CODE CAMP