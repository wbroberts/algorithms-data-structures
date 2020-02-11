// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = createArrayOfArrays(n);
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let count = 1;
  let direction = "right";

  while (count <= n * n) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = count;
        count++;
      }

      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = count;
        count++;
      }

      right -= 1;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = count;
        count++;
      }

      bottom -= 1;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = count;
        count++;
      }

      left += 1;
      direction = "right";
    }
  }

  return matrix;
}

function createArrayOfArrays(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  return arr;
}

module.exports = matrix;
