/*
 * @Author: lin.cao
 * @Date: 2020-07-02 15:46:07
 * @LastEditTime: 2020-07-02 16:07:58
 * @LastEditors: lin.cao
 * @Description: 深拷贝
 */
const deepClone = (target, map = new WeakMap()) => {
    if (target === null) return null

    if (typeof target === 'object') {
        let clone = Array.isArray(target) ? [] : {}
        if (map.has(target)) {
            return map.get(target)
        }
        map.set(target, clone)
        for (const key in target) {
            if (target.hasOwnProperty(key)) {
                clone[key] = clone(target[key], map)
            }
        }
        return clone
    }

    return target
}
