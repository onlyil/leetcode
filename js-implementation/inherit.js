/*
 * @Author: lin.cao
 * @Date: 2020-07-03 14:08:59
 * @LastEditTime: 2020-07-03 14:12:09
 * @LastEditors: lin.cao
 * @Description: 继承
 */
const inherit = function (subType, superType) {
    const prototype = Object.create(superType.prototype) // 创建对象
    prototype.constructor = subType // 指定构造函数指针
    subType.prototype = prototype // 指定原型对象
}
