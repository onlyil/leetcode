/*
 * @Author: lin.cao
 * @Date: 2020-05-29 14:17:24
 * @LastEditTime: 2020-05-29 15:16:31
 * @LastEditors: lin.cao
 * @Description: 判断单链表是否有环
 * @FilePath: /leetcode/algorithm/linkedList/hasLoop.js
 */
// 哈希map
// 时间复杂度：O(n)
// 空间复杂度：O(n)
const hasLoop = (head) => {
    if (!head || !head.next) {
        return false
    }
    const map = new Map()
    let curNode = head
    while (curNode) {
        if (map.has(curNode)) {
            return true
        } else {
            map.set(curNode, 1)
            curNode = curNode.next
        }
    }
    return false
}

// 快慢指针
// 时间复杂度：O(n)
// 空间复杂度：O(1)
const hasLoop2 = (head) => {
    if (!head || !head.next) {
        return false
    }
    let fast = head.next
    let slow = head
    while (fast !== slow) {
        if (!fast || !fast.next) {
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
}
