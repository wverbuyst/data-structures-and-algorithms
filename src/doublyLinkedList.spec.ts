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

describe('DoublyLinkedList append method', () => {
  const instance = new DoublyLinkedList('z')

  it('should append when list is empty', () => {
    instance.pop()
    instance.append('a')

    expect(instance.head?.value).toBe('a')
    expect(instance.tail?.value).toBe('a')
    expect(instance.length).toBe(1)
  })

  it.each([
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
  ])("should append '%s'", (value, expected) => {
    instance.append(value)

    expect(instance.head?.value).toBe('a')
    expect(instance.tail?.value).toBe(value)
    expect(instance.length).toBe(expected)
  })
})

describe('DoublyLinkedList pop method', () => {
  const instance = new DoublyLinkedList('a')
  instance.append('b')
  instance.append('c')

  it.each([
    ['c', 2, 'a', 'b'],
    ['b', 1, 'a', 'a'],
  ])("should pop '%s'", (value, length, head, tail) => {
    expect(instance.pop()?.value).toBe(value)
    expect(instance.head?.value).toBe(head)
    expect(instance.tail?.value).toBe(tail)
    expect(instance.length).toBe(length)
  })

  it('should pop last element', () => {
    expect(instance.pop()?.value).toBe('a')
    expect(instance.head).toEqual(null)
    expect(instance.tail).toEqual(null)
    expect(instance.length).toBe(0)
  })

  it('should return null when list is empty', () => {
    expect(instance.pop()).toEqual(null)
    expect(instance.head).toEqual(null)
    expect(instance.tail).toEqual(null)
    expect(instance.length).toBe(0)
  })
})

describe('DoublyLinkedList prepend method', () => {
  const instance = new DoublyLinkedList('z')

  it('should prepend when list is empty', () => {
    instance.pop()
    instance.prepend('a')

    expect(instance.head?.value).toBe('a')
    expect(instance.tail?.value).toBe('a')
    expect(instance.length).toBe(1)
  })

  it.each([
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
  ])("should prepend '%s'", (value, expected) => {
    instance.prepend(value)

    expect(instance.head?.value).toBe(value)
    expect(instance.tail?.value).toBe('a')
    expect(instance.length).toBe(expected)
  })
})

describe('DoublyLinkedList popFirst method', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('z')
  })

  it('should return null when list is empty', () => {
    instance.pop()

    expect(instance.popFirst()).toEqual(null)
    expect(instance.head).toEqual(null)
    expect(instance.tail).toEqual(null)
    expect(instance.length).toBe(0)
  })

  it('should return first node when there are two nodes', () => {
    instance.append('zz')

    expect(instance.popFirst()?.value).toEqual('z')
    expect(instance.head?.value).toEqual('zz')
    expect(instance.tail?.value).toEqual('zz')
    expect(instance.length).toBe(1)
  })

  it('should return node when there is one node', () => {
    expect(instance.popFirst()?.value).toEqual('z')
    expect(instance.head).toEqual(null)
    expect(instance.tail).toEqual(null)
    expect(instance.length).toBe(0)
  })
})

describe('DoublyLinkedList get method', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('z')
  })

  it('should return node for that index, when there are only 2 elements', () => {
    instance.append('a')

    expect(instance.get(0)?.value).toBe('z')
    expect(instance.get(1)?.value).toBe('a')
  })

  it('should return node for that index', () => {
    instance.append('a')
    instance.append('b')
    instance.append('c')

    expect(instance.get(0)?.value).toBe('z')
    expect(instance.get(1)?.value).toBe('a')
    expect(instance.get(2)?.value).toBe('b')
    expect(instance.get(3)?.value).toBe('c')
  })

  it('should return null when the index is out of range', () => {
    expect(instance.get(-1)).toEqual(null)
    expect(instance.get(1)).toEqual(null)
  })

  it('should return null when the list is empty', () => {
    instance.pop()

    expect(instance.get(0)).toEqual(null)
  })
})

describe('DoublyLinkedList set method', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('z')
  })

  it('should return true if node exists at the index', () => {
    expect(instance.set(0, 'zz')).toBe(true)
    expect(instance.get(0)?.value).toBe('zz')
  })

  it('should return false when the index is out of range', () => {
    expect(instance.set(-1, 'zz')).toBe(false)
    expect(instance.set(1, 'zz')).toEqual(false)
  })

  it('should return false when the list is empty', () => {
    instance.pop()

    expect(instance.set(0, 'a')).toEqual(false)
    expect(instance.get(0)).toEqual(null)
  })
})

describe('DoublyLinkedList insert method', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('z')
  })

  it('should return false when the index is out of range', () => {
    expect(instance.insert(-1, 'zz')).toBe(false)
    expect(instance.insert(2, 'zz')).toEqual(false)
    expect(instance.length).toBe(1)
  })

  it('should return true inserting at index 0', () => {
    expect(instance.insert(0, 'zz')).toBe(true)
    expect(instance.get(0)?.value).toBe('zz')
    expect(instance.get(1)?.value).toBe('z')
    expect(instance.length).toBe(2)
  })

  it('should return true inserting at the end', () => {
    expect(instance.insert(1, 'zz')).toBe(true)
    expect(instance.get(0)?.value).toBe('z')
    expect(instance.get(1)?.value).toBe('zz')
    expect(instance.length).toBe(2)
  })

  it('should return true when inserting', () => {
    instance.append('zzz')
    expect(instance.insert(1, 'zz')).toBe(true)
    expect(instance.get(0)?.value).toEqual('z')
    expect(instance.get(1)?.value).toEqual('zz')
    expect(instance.get(2)?.value).toEqual('zzz')
    expect(instance.length).toBe(3)
  })
})

describe('DoublyLinkedList remove method', () => {
  let instance: DoublyLinkedList

  beforeEach(() => {
    instance = new DoublyLinkedList('z')
  })

  it('should return null when the index is out of range', () => {
    expect(instance.remove(-1)).toBe(null)
    expect(instance.remove(2)).toEqual(null)
    expect(instance.length).toBe(1)
  })

  it('should return node removed at index 0', () => {
    expect(instance.remove(0)?.value).toBe('z')
    expect(instance.get(0)).toBe(null)
    expect(instance.length).toBe(0)
  })

  it('should return node removed at the end', () => {
    instance.append('zz')
    expect(instance.get(0)?.value).toBe('z')
    expect(instance.remove(1)?.value).toBe('zz')
    expect(instance.length).toBe(1)
  })

  it('should return node when removing', () => {
    instance.append('zz')
    instance.append('zzz')
    expect(instance.remove(1)?.value).toBe('zz')
    expect(instance.get(0)?.value).toEqual('z')
    expect(instance.get(1)?.value).toEqual('zzz')
    expect(instance.length).toBe(2)
  })
})
