import { Stack, Node } from './stack'

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

describe('Stack', () => {
  let instance: Stack

  beforeEach(() => {
    instance = new Stack('a')
  })

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(Stack)
    expect(instance).toHaveProperty('height')
    expect(instance).toHaveProperty('top')
    expect(instance.height).toBe(1)
  })
})

describe('Stack printElements', () => {
  const instance = new Stack('z')
  instance.push('zz')
  const consoleLogMock = jest
    .spyOn(console, 'log')
    .mockImplementation(() => null)
  instance.printElements()

  it('should print values of all elements', () => {
    expect(consoleLogMock).toBeCalledTimes(instance.height)
    expect(consoleLogMock).toHaveBeenNthCalledWith(1, 'Element 1: zz')
    expect(consoleLogMock).toHaveBeenNthCalledWith(2, 'Element 2: z')
  })
})

describe('Stack printStack', () => {
  const instance = new Stack('z')
  const consoleDirMock = jest
    .spyOn(console, 'dir')
    .mockImplementation(() => null)
  instance.printStack()

  it('should print stack', () => {
    expect(consoleDirMock).toBeCalledTimes(1)
    expect(consoleDirMock).toBeCalledWith(instance, { depth: null })
  })
})

describe('Stack push method', () => {
  const instance = new Stack('z')

  it('should append when list is empty', () => {
    instance.pop()
    instance.push('a')

    expect(instance.top?.value).toBe('a')
    expect(instance.height).toBe(1)
  })

  it.each([
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
  ])("should append '%s'", (value, expected) => {
    instance.push(value)

    expect(instance.top?.value).toBe(value)
    expect(instance.height).toBe(expected)
  })
})

describe('Stack pop method', () => {
  const instance = new Stack('a')
  instance.push('b')
  instance.push('c')

  it.each([
    ['c', 2, 'b'],
    ['b', 1, 'a'],
  ])("should pop '%s'", (value, height, top) => {
    expect(instance.pop()?.value).toBe(value)
    expect(instance.top?.value).toBe(top)
    expect(instance.height).toBe(height)
  })

  it('should pop last element', () => {
    expect(instance.pop()?.value).toBe('a')
    expect(instance.top).toEqual(null)
    expect(instance.height).toBe(0)
  })

  it('should return null when stack is empty', () => {
    expect(instance.pop()).toEqual(null)
    expect(instance.top).toEqual(null)
    expect(instance.height).toBe(0)
  })
})
