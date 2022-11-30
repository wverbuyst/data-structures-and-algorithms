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

  get(index: number): Node | null {
    if (index < 0 || index > this.length - 1) {
      return null
    }
    let temp = this.head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        if (temp) {
          temp = temp.next
        }
      }
    } else {
      temp = this.tail
      for (let i = this.length - 1; i > index; i--) {
        if (temp) {
          temp = temp.prev
        }
      }
    }
    return temp
  }

  set(index: number, value: unknown): boolean {
    const temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(index: number, value: unknown): boolean {
    if (index < 0 || index > this.length) {
      return false
    }
    if (index === 0) {
      return this.prepend(value)
    }
    if (index === this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)

    const before = this.get(index - 1) as Node
    const after = before?.next as Node

    before.next = newNode
    newNode.prev = before
    after.prev = newNode
    newNode.next = after

    this.length++
    return true
  }

  remove(index: number): Node | null {
    if (index < 0 || index > this.length - 1) {
      return null
    }
    if (index === 0) {
      return this.popFirst()
    }
    if (index === this.length - 1) {
      return this.pop()
    }

    const temp = this.get(index) as Node

    if (temp.next && temp.prev) {
      temp.next.prev = temp.prev
      temp.prev.next = temp.next
      temp.prev = null
      temp.next = null
    }

    this.length--
    return temp
  }
}
