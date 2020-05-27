/*
 * @Author: lin.cao
 * @Date: 2020-05-06 10:00:07
 * @LastEditTime: 2020-05-06 11:09:34
 * @LastEditors: lin.cao
 * @Description: 无重复字符的最长子串
 * @FilePath: /leetcode/lengthOfLongestSubstring.js
 */
const lengthOfLongestSubstring = (str) => {
    if (typeof str !== 'string') {
        return 0
    }

    let arr = []
    let maxLength = 0
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i])
        } else {
            maxLength = Math.max(maxLength, arr.length)
            arr = [str[i]]
        }
    }

    return maxLength
}

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
