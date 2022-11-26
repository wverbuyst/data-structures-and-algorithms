import { DoublyLinkedList, Node } from './doublyLinkedList'

describe('Node', () => {
  const instance = new Node('a')

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(Node)
    expect(instance).toHaveProperty('value')
    expect(instance).toHaveProperty('next')
    expect(instance).toHaveProperty('prev')
    expect(instance.value).toBe('a')
    expect(instance.next).toEqual(null)
    expect(instance.prev).toEqual(null)
  })
})

describe('DoublyLinkedList', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('a')
  })

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(DoublyLinkedList)
    expect(instance).toHaveProperty('length')
    expect(instance).toHaveProperty('head')
    expect(instance).toHaveProperty('tail')
    expect(instance.length).toBe(1)
  })
})

describe('DoublyLinkedList printElements', () => {
  const instance = new DoublyLinkedList('z')
  instance.append('zz')
  const consoleLogMock = jest
    .spyOn(console, 'log')
    .mockImplementation(() => null)
  instance.printElements()

  it('should print values of all elements', () => {
    expect(consoleLogMock).toBeCalledTimes(instance.length)
    expect(consoleLogMock).toHaveBeenNthCalledWith(1, 'Element 1: z')
    expect(consoleLogMock).toHaveBeenNthCalledWith(2, 'Element 2: zz')
  })
})

describe('DoublyLinkedList print list', () => {
  const instance = new DoublyLinkedList('z')
  const consoleDirMock = jest
    .spyOn(console, 'dir')
    .mockImplementation(() => null)
  instance.printList()

  it('should print list', () => {
    expect(consoleDirMock).toBeCalledTimes(1)
    expect(consoleDirMock).toBeCalledWith(instance, { depth: null })
  })
})
