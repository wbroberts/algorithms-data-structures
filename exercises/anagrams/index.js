// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

function anagrams(stringA, stringB) {
  const a = toMap(stringA);
  const b = toMap(stringB);

  if (length(a) !== length(b)) {
    return false;
  }

  return isMatch(a, b);
}

function toMap(str) {
  const map = {};
  
  str
    .replace(/[^\w]/gi, '')
    .toLowerCase()
    .split('')
    .forEach(char => {
      map[char] ? map[char]++ : map[char] = 1;
    });

  return map;
}

function length(obj) {
  return Object.keys(obj).length;
}

function isMatch(obj1, obj2) {
  return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
}

module.exports = anagrams;
