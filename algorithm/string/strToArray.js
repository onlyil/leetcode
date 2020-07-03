/*
 * @Author: lin.cao
 * @Date: 2020-07-02 17:56:33
 * @LastEditTime: 2020-07-03 10:47:40
 * @LastEditors: lin.cao
 * @Description: 多空格分隔的字符串转数组
 */

const strToArray = (str) => {
    const reg = /(?<=[^\s])\s+(?=[^\s])/g
    const res = str.replace(reg, ' ')
    return res.split(' ')
}

const str = 'ac mdg gdgsd   gsdgd sfsdf sdfsdfs    sdfsdf'
console.log(strToArray(str))
