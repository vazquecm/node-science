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
  }

  add (node) {
    node.next = this.head
    this.head = node
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
