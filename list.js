'use strict'

class Node {
  constructor(data) {
    this.payload = data
    this.next = null
  }
}

class List {
  constructor () {
    this.head = null
    this.tail = null
  }

  addHead (node) {
      this.tail = this.tail || node
      node.next = this.head
      this.head = node
    }

    this.tail = node
  }

  removeTail () {
    let current = this.head

    while (current.next !== this.tail) {
      current = current.next
    }

    removeHead () {
      this.head = this.head.next
    }
  }


const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
list.add(new Node('D'))
list.add(new Node('E'))
list.add(new Node('F'))
console.log(list)
