/*
 * @Author: lin.cao
 * @Date: 2020-05-07 18:42:49
 * @LastEditTime: 2020-07-01 09:35:08
 * @LastEditors: lin.cao
 * @Description: 删除字符串中的所有两个相邻重复项
 * @FilePath: /leetcode/removeDuplicates.js
 */
// 利用栈来存储
const removeDuplicates = (str) => {
    const arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== arr[arr.length - 1]) {
            arr.push(str[i])
        } else {
            arr.pop()
        }
    }
    return arr.join('')
}

console.log(removeDuplicates('abbaca')) // ca
