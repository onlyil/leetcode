/*
 * @Author: lin.cao
 * @Date: 2020-06-28 14:19:20
 * @LastEditTime: 2020-06-29 09:27:24
 * @LastEditors: lin.cao
 * @Description: 快速排序
 * @FilePath: /leetcode/algorithm/sort/quick.js
 */
// 时间复杂度：O(nlogn)
// 空间复杂度：O(logn)
// 不稳定
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    const pivotIndex = Math.floor(arr.length / 2)
    const pivot = arr[pivotIndex]
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                left.push(arr[i])
            } else {
                right.push(arr[i])
            }
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(quickSort(array))
