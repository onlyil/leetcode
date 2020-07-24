/*
 * @Author: lin.cao
 * @Date: 2020-05-31 10:39:36
 * @LastEditTime: 2020-07-21 09:59:22
 * @LastEditors: lin.cao
 * @Description: LRU 缓存
 * @FilePath: /leetcode/LRUCache.js
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key) {
        // 存在就更新
        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)
            return value
        }
        return -1
    }

    put(key, value) {
        // 存在就更新
        if (this.cache.has(key)) {
            this.cache.delete(key)
            this.cache.set(key, value)
        } else {
            // 不存在就插入，同时判断是否超出容量
            this.cache.set(key, value)
            if (this.cache.size > this.capacity) {
                const firstKey = [...this.cache.keys()][0]
                this.cache.delete(firstKey)
            }
        }
    }
}

const cache = new LRUCache(2)

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)) // 返回  1

cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2))      // 返回 -1 (未找到)

cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1))       // 返回 -1 (未找到)
console.log(cache.get(3))       // 返回  3
console.log(cache.get(4))       // 返回  4
