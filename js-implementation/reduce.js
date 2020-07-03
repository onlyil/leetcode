/*
 * @Author: lin.cao
 * @Date: 2020-07-03 11:36:33
 * @LastEditTime: 2020-07-03 13:02:17
 * @LastEditors: lin.cao
 * @Description: reduce 实现
 */
Array.prototype.myReduce = function(callback, initialVal) {
    const ctx = this
    const length = ctx.length
    let i = 0
    let accumulator = initialVal || ctx[0]

    while (i < length) {
        accumulator = callback.call(null, accumulator, ctx[i], i, ctx)
        i += 1
    }
    return accumulator
}

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

const flat = (arr) => {
    return arr.myReduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}
console.log(flat(arr))
