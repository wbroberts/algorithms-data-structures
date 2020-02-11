// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = [0];
  const nodes = [root, null];
  let index = 0;

  while (nodes.length > 1) {
    const node = nodes.shift();

    if (!node && !!nodes.length) {
      index++;
      nodes.push(node);
      widths.push(0);
    } else {
      nodes.push(...node.children);
      widths[index]++;
    }
  }

  return widths;
}

module.exports = levelWidth;
