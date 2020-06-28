/*
 * @Author: lin.cao
 * @Date: 2020-06-28 11:13:50
 * @LastEditTime: 2020-06-28 12:49:51
 * @LastEditors: lin.cao
 * @Description: 选择排序
 * @FilePath: /leetcode/algorithm/sort/select.js
 */
// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 不稳定
const selectionSort = (arr) => {
    const length = arr.length
    let minIndex
    for (let i = 0; i < length - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < length; j++) {
            // 找出最小的
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 交换
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(selectionSort(array))
