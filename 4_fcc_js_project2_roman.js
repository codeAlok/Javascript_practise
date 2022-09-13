// Convert provided number into roman numerals

function convertToRoman(num) {

    const romanTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let romanNumber = '';
  
    for(const key in romanTable){
      const numValue = romanTable[key];
  
      while(numValue <= num){
        num = num - numValue;
        
        romanNumber += key;
      }
  
    }
  
//    return romanNumber;
console.log(romanNumber);
  }
  
  convertToRoman(3999);