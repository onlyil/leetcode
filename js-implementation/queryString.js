/*
 * @Author: lin.cao
 * @Date: 2020-06-15 11:40:26
 * @LastEditTime: 2020-06-16 09:50:23
 * @LastEditors: lin.cao
 * @Description: 解析 queryString 对象
 * @FilePath: /leetcode/queryString.js
 */
const queryString = (url) => {
    const params = {}
    const searchParams = new URL(url).searchParams
    for (const [key, val] of searchParams) {
        params[key] = val
    }
    return params
}

const queryString2 = (url) => {
    const params = {}
    url.replace(/([^?=&]+)=([^&#]+)/g, (_, key, val) => {
        params[key] = val
    })
    return params
}

const url = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash'
console.log(queryString(url))
console.log(queryString2(url))
