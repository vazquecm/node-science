'use strict'

class Dictionary {
  constructor () {
    const this.data = []
  }

  add (index, value) {
    this data[index] = value
  }

  find (index) {
    rreturn this.data[index]
  }

  remove (index) {
    delete this.data[index]
  }

  showAll () {
    Object
    .keys(this.data)
    .sort()
    .forEach(key => console.log(key this.data[key]))
  }
}
