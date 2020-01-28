// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels("Why?") --> 0

function vowels(str) {
  return str.split("").filter(char => isVowel(char)).length;
}

function isVowel(char) {
  return char.toLowerCase().match(/([aeiou])/);
}

// function vowels(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (isVowel(str.charAt(i))) {
//       count++;
//     }
//   }

//   return count;
// }

// function isVowel(char) {
//   switch (char.toLowerCase()) {
//     case "a":
//       return true;
//     case "e":
//       return true;
//     case "i":
//       return true;
//     case "o":
//       return true;
//     case "u":
//       return true;
//     default:
//       return false;
//   }
// }

module.exports = vowels;
