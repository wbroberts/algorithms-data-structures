// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
maxChar("abcccccccd")
maxChar("apple 1231111")

function maxChar(str) {
  const map = {};
  const max = { char: '', count: 0 };

  str.split('').forEach(char => {
    map[char] ? map[char]++ : map[char] = 1;
    
    if (map[char] > max.count) {
      max.char = char;
      max.count = map[char];
    }
  });

  return max.char;
}

module.exports = maxChar;
