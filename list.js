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
list.addTail(new Node('A'))
list.addTail(new Node('B'))
list.addTail(new Node('C'))
list.addTail(new Node('D'))
list.addTail(new Node('E'))
list.addTail(new Node('F'))
console.log(list)
