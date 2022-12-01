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

  printElements(): void {
    let temp = this.top
    let i = 0
    while (i < this.height) {
      // eslint-disable-next-line no-console
      console.log(`Element ${i + 1}: ${temp?.value}`)
      temp = temp?.next || null
      i++
    }
  }

  printStack(): void {
    // eslint-disable-next-line no-console
    console.dir(this, { depth: null })
  }

  push(value: unknown): boolean {
    const newNode = new Node(value)
    if (this.height === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.height++
    return true
  }

  pop(): Node | null {
    if (!this.top) {
      return null
    }
    const temp = this.top
    this.top = this.top.next
    temp.next = null
    this.height--
    return temp
  }
}
