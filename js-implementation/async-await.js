/*
 * @Author: lin.cao
 * @Date: 2020-07-06 16:24:08
 * @LastEditTime: 2020-07-06 17:18:45
 * @LastEditors: lin.cao
 * @Description: async await 实现
 * @FilePath: /leetcode/js-implementation/async-await.js
 */
function asyncToGenerator(fn) {
    // 返回一个函数，该函数执行返回 Promise
    return function (...args) {
        const ctx = this
        return new Promise((resolve, reject) => {
            const gen = fn.apply(ctx, args)
            step()

            function step(val) {
                try {
                    var res = gen.next(val)
                } catch (error) {
                    return reject(error)
                }
                // 迭代完成后 resolve
                if (res.done) {
                    return resolve(res.value)
                }
                Promise.resolve(res.value).then(
                    (val) => {
                        step(val)
                    },
                    (err) => {
                        gen.throw(err)
                    }
                )
            }
        })
    }
}

function* myGenerator() {
    try {
        console.log(yieldPromise.resolve(1))
        console.log(yield2)   //2
        console.log(yieldPromise.reject('error'))
    } catch (error) {
        console.log(error)
    }
}

const asyncFn = asyncToGenerator(myGenerator)
asyncFn().then((res) => {
    console.log(res)
})
