/*
 * @Author: lin.cao
 * @Date: 2020-07-01 09:16:55
 * @LastEditTime: 2020-07-01 09:34:36
 * @LastEditors: lin.cao
 * @Description: 最长公共前缀
 */
const maxCommonPrefix = (arr) => {
    return arr.reduce((acc, cur) => {
        const length = Math.min(acc.length, cur.length)
        let common = ''
        for (let i = 0; i < length; i++) {
            if (acc[i] === cur[i]) {
                common += acc[i]
            } else {
                break
            }
        }
        return common
    }, arr[0])
}

console.log(maxCommonPrefix(["flower","flow","flight"])) // fl
console.log(maxCommonPrefix(["dog","racecar","car"]) === '') // true
