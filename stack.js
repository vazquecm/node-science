'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor () {
    this.head = null
  }

  push (item) {
    let node

    if (item instancof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    pop() {
      const toRemove = this.head

      this.head = toRemove.next
      return toRemove
    }
  }
}
