// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   peek() {
//     return this.stack.slice(0).pop();
//   }

//   pop() {
//     return this.stack.pop();
//   }

//   push(data) {
//     this.stack.push(data);
//   }

// }

class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return [...this.stack].pop();
  }

  pop() {
    const newStack = [...this.stack]
    const firstItem = newStack.pop();
    this.stack = newStack;

    return firstItem;
  }

  push(data) {
    this.stack = [...this.stack, data];
  }
}

module.exports = Stack;
