/*
 * @Author: lin.cao
 * @Date: 2020-06-29 21:46:26
 * @LastEditTime: 2020-06-30 09:57:43
 * @LastEditors: lin.cao
 * @Description: 金额千分位处理
 */
// x(?=y) 先行断言
const moneyFormat = (number) => {
    const str = number.toString()
    const reg = /(\d)(?=(((\d{3})+)(?=(\.|$))))/g
    return str.replace(reg, '$1,')
}

console.log(moneyFormat(10023456.99)) // 10,023,456.99
console.log(10023456.99.toLocaleString()) // 10,023,456.99
console.log(moneyFormat(1234567)) // 1,234,567
