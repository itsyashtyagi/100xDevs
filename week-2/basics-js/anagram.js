function isAnagram(str1, str2){
    let s1 = str1.toLowerCase().split('').sort().join('');
    let s2 = str2.toLowerCase().split('').sort().join('');

    // if(s1.length != s2.length){
    //     return false;
    // } else{
    //     for(let index in s1){
    //         if(s1.charAt(index) != s2.charAt(index)){
    //             return false;
    //         }
    //     }
    // }
    // return true;

    return s1 === s2;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('rail safety', 'fairy tales'));
console.log(isAnagram('openai', 'aiopen'));
console.log(isAnagram('', ''));
console.log(isAnagram('hello', 'world'));
console.log(isAnagram('openai', 'open'));
console.log(isAnagram('hello', 'lhel'));
console.log(isAnagram('working', 'non'));
console.log(isAnagram('Debit Card', 'Bad Credit'));
console.log(isAnagram('School MASTER', 'The ClassROOM'));
console.log(isAnagram('abc!', '!bac'));
console.log(isAnagram('hello', 'hello!'));
console.log(isAnagram('openai!', 'open'));

export default isAnagram;