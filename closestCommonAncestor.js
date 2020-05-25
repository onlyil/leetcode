/*
 * @Author: lin.cao
 * @Date: 2020-05-18 15:39:42
 * @LastEditTime: 2020-05-19 12:05:40
 * @LastEditors: lin.cao
 * @Description: 二叉树两个节点的最近公共祖先
 * @FilePath: /leetcode/closestCommonAncestor.js
 */

// 子任务：遍历左右子树
// 终止条件：
// 1. 当越过叶节点，则直接返回 null
// 2. 当 root 等于 p,q，则直接返回 root

const closestCommonAncestor = (root, p, q) => {
    if (root === null || root === p || root === q) return root

    const left = closestCommonAncestor(root.left, p, q)
    const right = closestCommonAncestor(root.right, p, q)

    if (left === null && right === null) return null
    if (left === null) return right
    if (right === null) return left
    return root
}
