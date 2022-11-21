import { LinkedList } from './linkedList'

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

describe('LinkedList append method', () => {
  const instance = new LinkedList(1)

  it.each([
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
  ])("should append '%s'", (value, expected) => {
    instance.append(value)
    expect(instance.head?.value).toBe(1)
    expect(instance.tail?.value).toBe(value)
    expect(instance.length).toBe(expected)
  })
})
