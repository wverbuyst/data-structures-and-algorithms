export class Node {
  next: Node | null
  constructor(public value: unknown) {
    this.next = null
  }
}
