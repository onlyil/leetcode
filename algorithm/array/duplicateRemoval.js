/*
 * @Author: lin.cao
 * @Date: 2020-06-30 22:51:43
 * @LastEditTime: 2020-06-30 23:00:57
 * @LastEditors: lin.cao
 * @Description: 数组去重
 */

const dr = (arr) => [...new Set(arr)]

const dr2 = (arr) => {
    return arr.reduce((acc, cur) => {
        return acc.includes(cur) ? acc : [...acc, cur]
    }, [])
}

const arr = [0, 1, 1, 2, 3, 3, 4, 5]
console.log(dr(arr))
console.log(dr2(arr))
