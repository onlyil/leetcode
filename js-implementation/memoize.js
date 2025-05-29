function memoize(fn, resolver) {
  const cache = new Map()

  const func = function (...args) {
    const key = resolver ? resolver(...args) : args[0]
    if (cache.has(key)) {
      return cache.get(key)
    }
    const res = fn(...args)
    cache.set(key, res)
    return res
  }

  func.cache = cache

  return func
}

const object = { a: 1, b: 2 }
const other = { c: 3, d: 4 }

const value = memoize((obj) => Object.values(obj), obj => obj)

console.log(value(object)) // 1 2
console.log(value(other)) // 3 4


object.a = 2
console.log(value(object)) // 1 2

value.cache.set(object, ['a', 'b'])
console.log(value(object)) // ['a', 'b']
