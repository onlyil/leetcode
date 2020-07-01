/*
 * @Author: lin.cao
 * @Date: 2020-06-28 10:33:43
 * @LastEditTime: 2020-06-29 09:24:27
 * @LastEditors: lin.cao
 * @Description: 冒泡排序
 * @FilePath: /leetcode/algorithm/sort/buble.js
 */
// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 稳定
const bubleSort = (arr) => {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(bubleSort(array))

// 优化
// 设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置
const bubleSort2 = (arr) => {
    let i = arr.length - 1 // 初始时,最后位置保持不变
    while (i > 0) {
        let pos = 0 // 每轮开始时,无记录交换
        for (let j = 0; j < i; j++) { // 循环到交换的位置 i 时结束本轮
            if (arr[j] > arr[j + 1]) {
                pos = j // 记录交换位置
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
        i = pos
    }
    return arr
}
console.log(bubleSort2(array))
