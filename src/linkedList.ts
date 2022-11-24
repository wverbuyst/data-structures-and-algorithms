export class Node {
  next: Node | null
  constructor(public value: unknown) {
    this.next = null
  }
}

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
      this.tail = newNode
    }

    this.length++
    return true
  }

  pop(): Node | null {
    if (this.head === null) {
      return null
    }
    let prev = this.head
    let temp = this.head
    while (temp.next !== null) {
      prev = temp
      temp = temp?.next
    }
    this.tail = prev
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
      this.head = null
    }
    return temp
  }

  prepend(value: unknown): boolean {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
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
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return temp
  }

  get(index: number): Node | null {
    if (index < 0 || index > this.length - 1) {
      return null
    } else {
      let temp = this.head
      for (let i = 0; i < index; i++) {
        if (temp) {
          temp = temp.next
        }
      }
      return temp
    }
  }
}
