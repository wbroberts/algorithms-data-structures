// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples

function reverseFor(str) {
  let reversed = '';

  for (let char = str.length - 1; char >= 0 ; char--) {
    reversed += str[char];
  }

  return reversed;
}

const reverse = (str) => str.split('').reverse().join('');

module.exports = reverse;
