/*
 * @Author: lin.cao
 * @Date: 2020-06-29 16:17:45
 * @LastEditTime: 2020-06-29 18:26:44
 * @LastEditors: lin.cao
 * @Description: bind call apply 实现
 * @FilePath: /leetcode/js-implementation/bind-call-apply.js
 */
// 参数为要绑定的上下文，返回新的函数
Function.prototype.myBind = function (context, ...args) {
    const fn = this
    return function () {
        fn.apply(context, [...args, ...arguments])
    }
}

// 在 context 上执行 fn ，得到结果后 delete
Function.prototype.myCall = function (context, ...args) {
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context, args) {
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

const a = {
    name: 'cl',
}

const b = {
    showName(a, b, c) {
        console.log(this.name, a, b, c)
    }
}

b.showName.myCall(a, 1, 2, 3) // cl 1 2 3
b.showName.myApply(a, [1, 2, 3]) // cl 1 2 3
