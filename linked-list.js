/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) this.head = newNode;
    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) this.head = newNode;
    newNode.next = this.head;
    this.head = newNode;

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if (!this.head) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    while (current !== null) {
      if (current.next.next === null) {
        let val = current.next.val;
        current.next = null;
        this.tail = current;
        this.length--;
        return val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {}

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

let insects = new LinkedList();
insects.unshift("ant");
insects.unshift("bee");
insects.push("ladybug");
insects.push("praying mantis");
// insects.pop();

console.log(insects);

module.exports = LinkedList;