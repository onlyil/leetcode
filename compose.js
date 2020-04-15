/*
 * @Author: lin.cao
 * @Date: 2020-04-14 18:19:06
 * @LastEditTime: 2020-04-14 18:40:01
 * @LastEditors: lin.cao
 * @Description: 
 * @FilePath: /leetcode/compose.js
 */

function compose (middleware) {
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
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times!'))
            }

            index = i
            let fn = middleware[i]
            if (i === middleware.length) fn = next
            if (!fn) {
                return Promise.resolve()
            }

            return Promise.resolve(fn(context, dispatch(i + 1)))
        }
    }
}
