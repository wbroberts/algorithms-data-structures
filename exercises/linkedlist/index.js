// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = this.head ? new Node(data, this.head) : new Node(data);
    this.head = node;
    return;
  }

  size() {
    let total = 0;
    let node = this.head;

    while (node) {
      total++;
      node = node.next;
    }

    return total;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
    return;
  }

  removeFirst() {
    const newHead = this.head.next;

    this.head = newHead ? newHead : null;
    return;
  }

  removeLast() {
    if (this.head && !this.head.next) {
      this.head = null;
    }

    let node = this.head;

    while (node) {
      if (!node.next.next) {
        node.next = null;
      }

      node = node.next;
    }

    return;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.insertFirst(data);
    }

    return;
  }

  getAt(index) {
    let node = this.head;
    let indexCount = 0;

    while (indexCount !== index) {
      node = node && node.next;
      indexCount++;
    }

    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const node = this.getAt(index - 1);

    if (node && node.next) {
      node.next = node.next.next;
    }

    return;
  }

  insertAt(data, index) {
    if (index === 0) {
      const newNode = new Node(data, this.head);
      this.head = newNode;

      return;
    }

    const node = this.getAt(index - 1);

    if (node) {
      const newNode = new Node(data, node.next);
      node.next = newNode;
    } else {
      this.insertLast(data);
    }

    return;
  }

  forEach(callback) {
    let node = this.head;

    while (node) {
      callback(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
