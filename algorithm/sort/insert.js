/*
 * @Author: lin.cao
 * @Date: 2020-06-28 13:05:01
 * @LastEditTime: 2020-06-28 13:29:25
 * @LastEditors: lin.cao
 * @Description: 插入排序
 * @FilePath: /leetcode/algorithm/sort/insert.js
 */
// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 稳定
const insertionSort = (arr) => {
    let i = 1
    while (i < arr.length) {
        let current = arr[i]
        let j = i - 1
        // 在已排序序列中从后向前扫描，找到相应位置并插入
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
        i++
    }
    return arr
}

const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

console.log(insertionSort(array))
