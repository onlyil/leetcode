/*
 * @Author: lin.cao
 * @Date: 2020-06-30 11:36:22
 * @LastEditTime: 2020-07-01 16:23:02
 * @LastEditors: lin.cao
 * @Description: 合并两个有序数组
 */
// O(m + n)
// O(1)
const merge = (nums1, m,  nums2, n) => {
    let i = m + n -1
    m--
    n--

    while (n >= 0) {
        if (m < 0) {
            nums1[i--] = nums2[n--]
            continue
        }
        nums1[i--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
    return nums1
}

let nums1 = [1,2,3],
    m = 3,
    nums2 = [2,5,6],
    n = 3

console.log(merge(nums1, m,  nums2, n))
