/*
 * @Author: lin.cao
 * @Date: 2020-06-15 19:04:48
 * @LastEditTime: 2020-06-15 19:28:02
 * @LastEditors: lin.cao
 * @Description: indexOf 实现
 * @FilePath: /leetcode/indexOf.js
 */
const strIndexOf = (str, srarchStr, fromIndex) => {
    const reg = new RegExp(srarchStr, 'ig')
    reg.lastIndex = fromIndex
    const result = reg.exec(str)
    return result ? result.index : -1
}

const arrIndexOf = (arr, ele, fromIndex = 0) => {
    if (!ele && ele !== 0) {
        return -1
    }
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i
        }
    }
    return -1
}

const indexOf = (items, searchItem, fromIndex) => {
    const isArray = Array.isArray(items)
    const isStr = Object.prototype.toString.call(items) === '[object String]'

    if (isArray) {
        return arrIndexOf(items, searchItem, fromIndex)
    }
    if (isStr) {
        return strIndexOf(items, searchItem, fromIndex)
    }
    throw new SyntaxError('类型错误！必须是数组或字符串！')
}
