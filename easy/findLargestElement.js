/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++){
     if(numbers[i] > largestNumber){
         largestNumber = numbers[i];
     }
    }
    return largestNumber;
 }
 
 module.exports = findLargestElement;
//  let take an example
const numbers = [10,5,2,3,4];
const result = findLargestElement(numbers);
console.log("largest element is:",result);
 
 
 
 
 
 
 