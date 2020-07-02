/*
 * @Author: lin.cao
 * @Date: 2020-06-02 10:28:14
 * @LastEditTime: 2020-07-02 10:24:23
 * @LastEditors: lin.cao
 * @Description: Promise 实现
 * @FilePath: /leetcode/promise.js
 */
class MyPromise {
    constructor(executor) {
        this._resolveQueue = []
        this._rejectQueue = []
        this._status = 'pending'
        this._value = void 0

        const _resolve = (val) => {
            if (this._status !== 'pending') return
            this._status = 'fulfilled'
            this._value = val
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(val)
            }
        }

        const _reject = (val) => {
            if (this._status !== 'pending') return
            this._status = 'rejected'
            this._value = val
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(val)
            }
        }

        try {
            executor(_resolve, _reject)
        } catch (error) {
            _reject(error)
        }
    }

    static resolve(val) {
        // 如果值为 promise，返回这个 promise
        if (val instanceof MyPromise) return val

        // 如果是 thenable
        if (val && val.then && typeof val.then === 'function') {
            const promise = new MyPromise((resolve, reject) => {
                try {
                    val.then(resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })

            return promise
        }

        // 返回一个以给定值解析后的 Promise 对象
        return new MyPromise((resolve, reject) => {
            resolve(val)
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promiseArr) {
        if (!Array.isArray(promiseArr)) return Promise.reject('参数需要是一个数组！')

        let num = 0
        const result = []
        return new MyPromise((resolve, reject) => {
            promiseArr.forEach((item, index) => {
                MyPromise.resolve(item).then(
                    (val) => {
                        num += 1
                        result[index] = val
                        if (num === promiseArr.length) {
                            resolve(result)
                        }
                    },
                    reject
                )
            })
        })
    }

    static race(promiseArr) {
        if (!Array.isArray(promiseArr)) return Promise.reject('参数需要是一个数组！')

        return new Promise((resolve, reject) => {
            for (const item of promiseArr) {
                MyPromise.resolve(item).then(resolve, reject)
            }
        })
    }

    then(resolveCb, rejectCb) {
        // 如果参数不是 function，则忽略它, 让链式调用继续往下执行
        if (typeof resolveCb !== 'function') {
            resolveCb = val => val
        }
        if (typeof rejectCb !== 'function') {
            rejectCb = err => err
        }

        // 返回一个新的 Primise 以链式调用
        return new MyPromise((resolve, reject) => {
            // 重新包装，获取回调的返回值进行分类
            const fulfilledCb = (val) => {
                try {
                    const res = resolveCb(val)
                    // 如果是 Promise 则等待其状态便变更，不是则直接 resolve
                    res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
                } catch (error) {
                    reject(error)
                }
            }

            const rejectedCb = (val) => {
                try {
                    const res = rejectCb(val)
                    res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
                } catch (error) {
                    reject(error)
                }
            }

            // 对于状态已经变为 fulfilled 或 rejected 的情况，直接执行then回调
            switch (this._status) {
                case 'pending':
                    this._resolveQueue.push(fulfilledCb)
                    this._rejectQueue.push(rejectedCb)
                    break;

                case 'fulfilled':
                    fulfilledCb(this._value)
                    break;

                case 'rejected':
                    rejectedCb(this._value)
                    break;

                default:
                    break;
            }
        })
    }

    catch(rejectCb) {
        // 返回一个 Promise，并且处理拒绝的情况
        return this.then(null, rejectCb)
    }

    finally(callback) {
        // 在 finally 之后，还可以继续then。并且会将值原封不动的传递给后面的 then
        return this.then(
            val => MyPromise.resolve(callback()).then(() => val),
            reason => MyPromise.resolve(callback()).then(() => { throw reason })
        )
    }
}

export default MyPromise
