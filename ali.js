// 1.实现一个方法，让页面平滑滑动到顶部

function scrollToTopAnimation(time) {
    console.time()
    const scrollTop = (document.documentElement || document.body).scrollTop
    const frameTime = 1000 / 60 // 每一帧的时间
    const frameNum = time / frameTime // 需要执行的次数
    const stepLength = scrollTop / frameNum // 步长

    const step = () => {
        const scrollTop = (document.documentElement || document.body).scrollTop
        if (scrollTop > 0) {
            window.scrollTo(0, scrollTop - stepLength)
            requestAnimationFrame(step)
        } else {
            console.timeEnd()
        }
    }
    step()
}

// 2. 实现一个方法，拉平 object
// 输出 {a.b.c: 1, d: 1, e.f: 0}

function flattenObj(obj) {
    if (!obj) {
        return false
    }
    const res = {}

    const traverse = function (obj, propName) {
        const keys = Object.keys(obj)
        keys.length && keys.forEach(key => {
            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                if (propName) {
                    traverse(obj[key], `${propName}.${key}`)
                } else {
                    traverse(obj[key], key)
                }
            } else {
                if (propName) {
                    res[`${propName}.${key}`] = obj[key]
                } else {
                    res[key] = obj[key]
                }
            }
        })
    }

    traverse(obj)
    return res
}

// 3. 实现一个 lodash get

const data = {
    a: [{ b: 1 }, { c: 2 }],
    b: { bb: { cc: 11 } },
};

function getObjectDataByKey(obj, key) {
    const path = key.replace(/\[(\d+)\]/g, '.$1').split('.')
    let res = obj
    for (const p of path) {
        res = res[p]
        if (res === void 0) {
            return void 0
        }
    }
    return res
}

console.log(getObjectDataByKey(data, 'a[0].b'))

// 4. 字符串去重，并统计出出现字数最多的字符串

function getUnicleStringAndMaxChar(str) {
    const map = new Map()
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    const res = [...map.keys()].join('')
    const arr = [...map.entries()].sort((a, b) => {
        return b[1] - a[1]
    })
    const maxChar = arr[0][0]
    return {
        res,
        maxChar,
    }
}

// 5. 实现一个方法，可以并发加载图片，数量可以控制
let imgs = [
    "https://wx4.sinaimg.cn/mw690/006eLk0Pgy1gc8yvba15bj31hc0u0npd.jpg",
    "https://wx1.sinaimg.cn/mw690/006fUZ8Mgy1gey9irj9xbj31v018o1kx.jpg",
    "https://wx4.sinaimg.cn/mw690/006AItRTly1gf3gx0ex0cj32iu1ojkjm.jpg",
    "https://wx1.sinaimg.cn/mw690/006eFiQily1gezdq016jij30c80bigm9.jpg",
    "https://wx2.sinaimg.cn/mw690/006eFiQily1ge8pj7moj5j30u0190tb0.jpg",
];

const loadImg = (url) => new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
        console.log('一张图片加载完成')
        resolve()
    }
    img.onerror = reject
    img.src = url
})

function concurrentRequest(urls, max) {
    const firstQueue = urls.splice(0, max)
    const promises = firstQueue.map((url, index) => {
        return loadImg(url).then(() => {
            // 用于在 Promise.race 之后找到完成的任务角标
            return index
        })
    })

    return urls.reduce((acc, cur) => {
        return acc
            .then(() => {
                return Promise.race(promises)
            })
            .then((index) => {
                promises[index] = loadImg(cur).then(() => {
                    return index
                })
            })
    }, Promise.resolve())
        .then(() => {
            return Promise.all(promises)
        })
}

concurrentRequest(imgs, 3).then(() => {
    console.log('finish')
})
