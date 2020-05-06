/*
 * @Author: lin.cao
 * @Date: 2020-05-06 14:15:28
 * @LastEditTime: 2020-05-06 17:02:21
 * @LastEditors: lin.cao
 * @Description: 有效的括号
 * @FilePath: /leetcode/validBracket.js
 */
const isValidBracket = (str) => {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            stack.push(str[i])
        } else {
            const val = stack.pop()
            if (map[val] !== str[i]) {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValidBracket('()[]{}')) // true
console.log(isValidBracket('([)]')) // false
console.log(isValidBracket('{[]}')) // true
console.log(isValidBracket('(]')) // false
