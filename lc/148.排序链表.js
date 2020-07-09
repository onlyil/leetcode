/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    return sortListRec(head)
};

// 分裂链表知道长度为 1
const sortListRec = function(head) {
    // 终止条件：长度为 1
    if (!head || !head.next) {
        return head
    }

    const middle = getMiddle(head)
    let right = middle.next
    middle.next = null
    let left = head
    left = sortListRec(left)
    right = sortListRec(right)
    return mergeTwoLists(left, right)
}

// 使用快慢指针找到中间节点
const getMiddle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

// 合并两个有序链表
const mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
}
// @lc code=end

