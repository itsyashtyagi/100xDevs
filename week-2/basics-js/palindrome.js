/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str){
    let lowerString = '';
    for (let char of str) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            lowerString += char.toLowerCase();
        }
    }
    let i = 0;
    let j = lowerString.length - 1;

    while(i < j){
        if(lowerString.charAt(i) != lowerString.charAt(j)){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome(''));