/*
 * @Author: lin.cao
 * @Date: 2020-07-01 18:52:34
 * @LastEditTime: 2020-07-01 19:09:33
 * @LastEditors: lin.cao
 * @Description: debounce
 */
const debounce = (fn, delay) => {
    let timer = null

    return function (...args) {
        const ctx = this

        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(ctx, ...args)
        }, delay);
    }
}


const throttle = (fn, interval) => {
    let last = 0

    return function (...args) {
        const ctx = this

        const now = Date.now()
        if (now - last >= interval) {
            fn.call(ctx, ...args)
            last = now
        }
    }
}
