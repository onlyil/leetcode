/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 = l1
    let node2 = l2

    // 使用哑结点来简化代码。如果没有哑结点，则必须编写额外的条件语句来初始化表头的值
    const dummyHead = new ListNode(0)
    let curNode = dummyHead
    let carry = 0

    while (node1 || node2) {
        let l = node1 ? node1.val : 0
        let r = node2 ? node2.val : 0
        let res = l + r + carry
        carry = parseInt(res / 10)
        curNode.next = new ListNode(res - carry * 10)
        if (node1) node1 = node1.next
        if (node2) node2 = node2.next
        curNode = curNode.next
    }
    // 处理最后一个进位
    if (carry) {
        curNode.next = new ListNode(carry)
    }

    return dummyHead.next
};
// 时间复杂度：O(max(m, n)) m n 为两个链表的长度
// 空间复杂度：O(max(m, n)) 新列表的长度为 max(m, n) + 1
// @lc code=end
