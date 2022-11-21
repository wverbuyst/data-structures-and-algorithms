/* eslint-disable no-console */
import { LinkedList } from './linkedList'

const myLinkedList = new LinkedList(8)

// APPEND
myLinkedList.append(9)
myLinkedList.append('test')
myLinkedList.append(10)
myLinkedList.append(true)
myLinkedList.printElements()
// myLinkedList.printList()
console.log('-------------------')
// POP
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
myLinkedList.printElements()
console.log('-------------------')

// PREPEND
myLinkedList.prepend(555)
myLinkedList.printElements()
// myLinkedList.printList()
console.log('-------------------')
myLinkedList.append(true)
myLinkedList.prepend(777)
myLinkedList.printElements()
// myLinkedList.printList()
console.log('-------------------')
