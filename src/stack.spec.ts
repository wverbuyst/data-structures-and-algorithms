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
