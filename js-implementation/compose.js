const compose = (...fns) => {
  return fns.reduce((acc, cur) => {
    return () => cur(acc())
  })
}

const fn1 = (val) => `${val}1`
const fn2 = (val) => `${val}2`
const fn3 = (val) => `${val}3`

const result = compose(fn1, fn2, fn3)('a')
console.log(result)
