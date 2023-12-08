/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  const clearstr1 = str1.replace(/\s/g, '').toLowerCase();
  const clearstr2 = str2.replace(/\s/g, '').toLowerCase();
  if(clearstr1.length =! clearstr2.length){
    return false;

  }
  function Frequency(str){
    const Frequencymap = {}
    for(const char of str){
      Frequencymap[char] = (Frequencymap || 0 ) +1;
    }
    return Frequencymap;
  }
  function compare(map1,map2){
    for(const key in map1){
      if(map1[key] !== map2[key]){
        return false;
      }
    }
  }
  return true;
  }
  
  module.exports = isAnagram;
  const str1 = 'listen';
  const str2 = 'silent';
  const result =isAnagram(str1,str2)
  console.log(result);
  
  
  
