/*
 * @Author: lin.cao
 * @Date: 2020-06-29 18:27:39
 * @LastEditTime: 2020-06-29 18:35:15
 * @LastEditors: lin.cao
 * @Description: new 实现
 * @FilePath: /leetcode/js-implementation/new.js
 */
// 1. 创建一个新对象
// 2. 将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象)
// 3. 执行构造函数中的代码(为这个新对象添加属性)
// 4. 返回新对象
const myNew = function (constructor, ...args) {
    const obj = {}
    constructor.call(obj, ...args)
    return obj
}
