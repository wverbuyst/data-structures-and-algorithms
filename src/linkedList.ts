import { Node } from './node'

export class LinkedList {
  head: Node | null
  tail: Node | null
  length: number

  constructor(value: unknown) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  printList() {
    let temp = this.head
    let i = 0
    while (i < this.length) {
      console.log(temp?.value)
      temp = temp?.next || null
      i++
    }
  }
}
