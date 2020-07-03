/*
 * @Author: lin.cao
 * @Date: 2020-07-02 16:34:05
 * @LastEditTime: 2020-07-03 13:31:13
 * @LastEditors: lin.cao
 * @Description: 柯里化
 */
const curry = function(fn) {
    return function judge(...args) {
        return args.length >= fn.length
            ? fn(...args)
            : (...arg) => judge(...args, ...arg)
    }
}

const sum = (a, b, c) => a + b + c

const currySum = curry(sum)

console.log(currySum(1)(2)(3))
console.log(currySum(1, 2)(3))
console.log(currySum(1, 2, 3))
