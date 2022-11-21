/* eslint-disable no-console */
import { LinkedList } from './linkedList'

const myLinkedList = new LinkedList(8)
myLinkedList.append(9)
myLinkedList.append('test')
myLinkedList.append(10)
myLinkedList.append(true)
myLinkedList.printElements()
myLinkedList.printList()
console.log('-------------------')
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
myLinkedList.printList()
