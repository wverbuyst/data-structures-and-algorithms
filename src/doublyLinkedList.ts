export class Node {
  prev: Node | null
  next: Node | null
  constructor(public value: unknown) {
    this.prev = null
    this.next = null
  }
}
