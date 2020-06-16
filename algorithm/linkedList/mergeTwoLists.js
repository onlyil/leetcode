/*
 * @Author: lin.cao
 * @Date: 2020-06-16 14:53:33
 * @LastEditTime: 2020-06-16 15:06:43
 * @LastEditors: lin.cao
 * @Description: 合并两个有序链表
 * @FilePath: /leetcode/algorithm/linkedList/mergeTwoLists.js
 */
const mergeTwoLists = (l1, l2) => {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
}
