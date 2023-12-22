/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    
  let  arr  =[ 'a' , 'e' , 'i' , 'o' , 'u' , 'A' , 'E' , 'I' , 'O' , 'U' ]
let res = 0;
    for(let char of str){
        if(arr.includes(char)){
          res++; 
        }
    }

    return res;
}
let a =countVowels("Hello, world!")
console.log(a);
module.exports = countVowels;