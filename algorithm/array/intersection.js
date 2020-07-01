/*
 * @Author: lin.cao
 * @Date: 2020-04-14 12:12:31
 * @LastEditTime: 2020-06-30 11:37:12
 * @LastEditors: lin.cao
 * @Description: 计算多个数组的交集
 */
function intersection(...args) {
    if (args.length === 0) {
        return []
    }
    if (args.length === 1) {
        return args[0]
    }

    const arr = args.reduce((acc, cur) => {
        return acc.filter(item => cur.includes(item))
    })

    return [...new Set(arr)]
}

const a = [1, 2, 3, 4]
const b = [0, 2, 3, 5]
const c = [-1, 2, 7, 9]

console.log(intersection(a, b, c))
