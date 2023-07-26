// question 1
// What does the following code return?
[1,2,3,4]

// question 2
//What does the following code return?
// ref

// questions 3
// What does the Map ***m*** look like after running the following code?
// the map m has two objects
console.log(m.size);
// returns 2
// the same array as key will be seem like different objects, since they are references in the memory

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;
x = hasDuplicate([1,3,3,4,5,6]);
console.log(x);
// true


// Write a function called vowelCount which accepts a string and returns 
// a map where the keys are numbers and the values are the count of the 
// vowels in the string.
function isVowel(char){
    return "aeiou".includes(char);
  }
  function vowelCount(str){
    const vowelMap = new Map();
    let count = 0;
    const vowelCounter = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    vowelMap.forEach( function ( value , key ) {
      count++;
      vowelCounter.set( count , key +' has '+ value + ' occurrence(s)' );
    });
    return vowelCounter;
}
// vowelCount('awesome');
// 1 "a has 1 occurrence(s)"
// 2 "e has 2 occurrence(s)"
// 3 "o has 1 occurrence(s)"