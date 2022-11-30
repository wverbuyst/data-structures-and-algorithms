export class Node {
  value: unknown
  next: Node | null

  constructor(value: unknown) {
    this.value = value
    this.next = null
  }
}

export class Stack {
  top: Node | null
  height: number

  constructor(value: unknown) {
    const newNode = new Node(value)
    this.top = newNode
    this.height = 1
  }
}
