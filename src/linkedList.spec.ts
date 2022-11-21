import { LinkedList } from './linkedList'

describe('LinkedList', () => {
  let instance: LinkedList

  beforeEach(() => {
    instance = new LinkedList(1)
  })

  it('should have properties', () => {
    expect(instance).toBeInstanceOf(LinkedList)
    expect(instance).toHaveProperty('length')
    expect(instance).toHaveProperty('head')
    expect(instance).toHaveProperty('tail')
    expect(instance.length).toBe(1)
  })
})

describe('LinkedList append method', () => {
  const instance = new LinkedList(1)

  it.each([
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
  ])("should append '%s'", (value, expected) => {
    instance.append(value)
    expect(instance.head?.value).toBe(1)
    expect(instance.tail?.value).toBe(value)
    expect(instance.length).toBe(expected)
  })
})
