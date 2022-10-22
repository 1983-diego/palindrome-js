function palindrome(str) {
    let str2 = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    let strLimpaReverse = str2.split("").reverse().join("");
    
    if (str2 === strLimpaReverse){
      return true
    } else {
      return false
    }
  }
  //console.log(palindrome("_eye"));
  console.log(palindrome("1 eye for of 1 eye."))