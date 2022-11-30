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
