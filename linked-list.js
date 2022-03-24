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

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;

    if (!this.head) {
      throw new Error("List is empty");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
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

  shift() {
    let current = this.head;

    if (!this.head) {
      throw new Error("List is empty");
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    let val = current.val;
    this.head = current.next;
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length <= idx || idx < 0) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === idx) {
        return current.val;
      } else {
        current = current.next;
        count++;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length <= idx || idx < 0) {
      throw new Error("Invalid index");
    }
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return;
      } else {
        current = current.next;
        count++;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length < idx || idx < 0) {
      throw new Error("Invalid index");
    }
    if (idx === 0) {
      this.unshift(val);
      return;
    } else if (idx === this.length) {
      this.push(val);
      return;
    }
    let newNode = new Node(val);
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count + 1 === idx) {
        let after = current.next;
        current.next = newNode;
        newNode.next = after;
        this.length++;
        return;
      }
      current = current.next;
      count++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length <= idx) {
      throw new Error("Invalid Index");
    }
    if (idx === 0) {
      this.shift();
      return;
    }
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count + 1 === idx) {
        count.next = count.next.next;
        this.length--;
      }
      count = count.next;
      count++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {}
}

let lst = new LinkedList([5, 10, 15, 20]);

lst.insertAt(3, 17);

console.log(lst.head.val);
console.log(lst.head.next.val);

module.exports = LinkedList;
