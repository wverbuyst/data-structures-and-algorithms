import { Node } from './doublyLinkedList'

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
