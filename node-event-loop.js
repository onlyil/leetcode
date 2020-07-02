setTimeout(() => {
    console.log('log-timeout-1')
}, 0);

const promise1 = new Promise((resolve) => {
    console.log('log-promise1')
    resolve('promise1')
})

setImmediate(() => {
    console.log('log-setImmediate')
}, 0)

;(async () => {
    console.log('async start')
    const str = await promise1
    console.log(str)
})()

promise1.then(() => {
    console.log('log-promise1-then')
})

console.log('log-end')

// node
// log-promise1
// async start
// log-end
// log-promise1-then
// promise1
// log-timeout-1
// log-setImmediate

// 浏览器
// log-promise1
// async start
// log-end
// promise1
// log-promise1-then
// log-setImmediate
// log-timeout-1

// 浏览器中 await 的后续操作会先加入微任务队列，而 node 中放在后面
// 浏览器中 setImmediate 早于 setTimeout
