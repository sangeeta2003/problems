/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  let cleanStr = str.toLowerCase();
  const count = cleanStr.match(/[aeiou]/g);
  return count ? count.length : 0;
}

// Example usage
console.log(countVowels('SAngeeta')); // Output: 3 (a, e, a are vowels)
