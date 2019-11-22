// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   add(data) {
//     this.queue.push(data);
//   }

//   remove() {
//     return this.queue.shift();
//   }
// }

// Immutable implementation
class Queue {
  constructor() {
    this.queue = [];
  }

  add(data) {
    this.queue = [...this.queue, data];
  }

  remove() {
    const firstItem = this.queue.shift();
    this.queue = [...this.queue];
    
    return firstItem;
  }
}

module.exports = Queue;
