'use strict'

class Node {
  constructor(data) {
    this.payload = data
    this.next = null
  }
}

// const h = new Node('hello')
// const w = new Node('world')

// console.log(h)
// console.log(w)


class List {
  constructor () {
    this.head = null
  }

   add (node) {
    if (this.head) {
      let current = this.head

      while(current.next) {
        current = current.next
      }
      current.next = node
    } else {
      this.head = node
    }
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



//// es5 syntax ///
// function Node (data) {
//   this.payload = data
// }
