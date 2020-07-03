/*
 * @Author: lin.cao
 * @Date: 2020-04-14 09:44:34
 * @LastEditTime: 2020-07-02 17:06:32
 * @LastEditors: lin.cao
 * @Description: 数组扁平化
 * @FilePath: /webpack-babel-learn/src/leetcode/flatten.js
 */
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// function foo(arr) {
//     return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b)
// }

// console.log(foo(arr))

function flatten(arr) {
    const stack = arr
    const res = []

    while (stack.length) {
        const next = stack.pop()
        if (Array.isArray(next)) {
            stack.push(...next)
        } else {
            res.push(next)
        }
    }

    return res.reverse()
}

console.log(flatten(arr))

const flat = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}
