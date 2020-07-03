/*
 * @Author: lin.cao
 * @Date: 2020-07-03 14:36:45
 * @LastEditTime: 2020-07-03 14:41:40
 * @LastEditors: lin.cao
 * @Description: 
 */ 
const myInstanceof = function(instance, constructor) {
    const prototype = constructor.prototype
    let proto = instance.__proto__
    while (true) {
        if (proto === null) return false
        if (proto !== prototype) {
            proto = proto.__proto__
        }
        return true
    }
}
