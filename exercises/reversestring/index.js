// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
  console.log(reverse('apple'))
  console.log(reverse('hello'))
  console.log(reverse('Greetings!'))

function reverse(str) {
  let reversed = '';

  for (let char = str.length - 1; char >= 0 ; char--) {
    reversed += str[char];
  }

  return reversed;
}



module.exports = reverse;
