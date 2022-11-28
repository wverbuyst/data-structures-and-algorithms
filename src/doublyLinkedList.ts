export class Node {
  prev: Node | null
  next: Node | null
  constructor(public value: unknown) {
    this.prev = null
    this.next = null
  }
}

export class DoublyLinkedList {
  head: Node | null
  tail: Node | null
  length: number
  constructor(public value: unknown) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  printElements(): void {
    let temp = this.head
    let i = 0
    while (i < this.length) {
      // eslint-disable-next-line no-console
      console.log(`Element ${i + 1}: ${temp?.value}`)
      temp = temp?.next || null
      i++
    }
  }

  printList(): void {
    // eslint-disable-next-line no-console
    console.dir(this, { depth: null })
  }

  append(value: unknown): boolean {
    const newNode = new Node(value)
    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return true
  }

  pop(): Node | null {
    if (this.length === 0) {
      return null
    }
    const temp = this.tail as Node
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail?.prev as Node
      this.tail.next = null
      temp.prev = null
    }
    this.length--
    return temp
  }

  prepend(value: unknown): boolean {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return true
  }

  popFirst(): Node | null {
    if (!this.head) {
      return null
    }
    const temp = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next as Node
      this.head.prev = null
      temp.next = null
    }
    this.length--
    return temp
  }
}
