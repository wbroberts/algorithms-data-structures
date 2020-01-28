// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const length = n * 2 - 1;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < n; i++) {
    const step = [];

    for (let j = 0; j < length; j++) {
      step[j] = j <= middle + i && j >= middle - i ? "#" : " ";
    }

    console.log(step.join(""));
  }
}

module.exports = pyramid;
