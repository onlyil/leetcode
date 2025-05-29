/*
 * @Author: lin.cao
 * @Date: 2020-04-14 18:19:06
 * @LastEditTime: 2020-07-01 15:04:04
 * @LastEditors: lin.cao
 * @Description: koa compose
 * @FilePath: /leetcode/compose.js
 */

function compose (middleware) {
    // 校验数组
    if (!Array.isArray(middleware)) {
        throw new TypeError('Middleware stack must be an arrary!')
    }

    for (const fn of middleware) {
        if (typeof fn !== 'function') {
            throw new TypeError('Middleware must be function!')
        }
    }

    return function (context, next) {
        let index = -1
        return dispatch(0)

        function dispatch(i) {
            // 如果在一个中间件中多次调用 next ，会执行两次 dispatch(i + 1) ，造成 i <= index 的情况
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times!'))
            }

            index = i
            let fn = middleware[i]
            // 最后一个中间件执行完之后，下一次就需要执行 next
            if (i === middleware.length) fn = next
            // 如果 next 不存在，直接 resolve
            if (!fn) {
                return Promise.resolve()
            }
            try {
                return Promise.resolve(fn(context, dispatch(i + 1)))
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
}
