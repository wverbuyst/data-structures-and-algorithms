import { LinkedList, Node } from './linkedList'

describe('Node', () => {
  const instance = new Node('a')

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(Node)
    expect(instance).toHaveProperty('value')
    expect(instance).toHaveProperty('next')
    expect(instance.value).toBe('a')
    expect(instance.next).toEqual(null)
  })
})

describe('LinkedList', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('a')
  })

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(LinkedList)
    expect(instance).toHaveProperty('length')
    expect(instance).toHaveProperty('head')
    expect(instance).toHaveProperty('tail')
    expect(instance.length).toBe(1)
  })
})

describe('LinkedList printElements', () => {
  const instance = new LinkedList('z')
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

describe('LinkedList print list', () => {
  const instance = new LinkedList('z')
  const consoleDirMock = jest
    .spyOn(console, 'dir')
    .mockImplementation(() => null)
  instance.printList()

  it('should print list', () => {
    expect(consoleDirMock).toBeCalledTimes(1)
    expect(consoleDirMock).toBeCalledWith(instance, { depth: null })
  })
})

describe('LinkedList append method', () => {
  const instance = new LinkedList('z')

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

describe('LinkedList pop method', () => {
  const instance = new LinkedList('a')
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

describe('LinkedList prepend method', () => {
  const instance = new LinkedList('z')

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

describe('LinkedList popFirst method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
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

describe('LinkedList get method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
  })

  it('should return node for that index', () => {
    instance.append('a')

    expect(instance.get(0)?.value).toBe('z')
    expect(instance.get(1)?.value).toBe('a')
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

describe('LinkedList set method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
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

describe('LinkedList insert method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
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

describe('LinkedList remove method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
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

describe('LinkedList reverse method', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList('z')
  })

  it('should return the same when length is zero', () => {
    instance.pop()
    instance.reverse()
    expect(instance.head).toBe(null)
    expect(instance.head).toEqual(null)
    expect(instance.length).toBe(0)
  })

  it('should return reversed list', () => {
    instance.append('zz')
    instance.append('zzz')
    instance.reverse()
    expect(instance.head?.value).toBe('zzz')
    expect(instance.head?.next?.value).toBe('zz')
    expect(instance.tail?.value).toBe('z')
    expect(instance.length).toBe(3)
  })
})
