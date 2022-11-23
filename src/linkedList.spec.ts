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
