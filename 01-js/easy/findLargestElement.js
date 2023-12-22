/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
        let large = numbers[0];

        for (let index = 0; index < numbers.length; index++) {
            let element = numbers[index];
            if(element > large){
                large = element;
            }
            
        }
        return large;
        
}

console.log(findLargestElement([3,7,2,9]));

module.exports = findLargestElement;