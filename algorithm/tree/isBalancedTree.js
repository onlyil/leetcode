/*
 * @Author: lin.cao
 * @Date: 2020-06-09 13:23:32
 * @LastEditTime: 2020-06-09 13:30:45
 * @LastEditors: lin.cao
 * @Description: 判断平衡二叉树
 * @FilePath: /leetcode/algorithm/tree/isBalancedTree.js
 */

// 节点的左右节点深度差值 >1 则标记其深度为 -1
// 左右节点有一个深度为 -1 则该节点深度为 -1
const isBalancedTree = function(root) {
    if (!root) return true
    const depth = (node) => {
        if (!node) return 0
        const left = depth(node.left)
        const right = depth(node.right)
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1
        }
        return Math.max(left, right) + 1
    }
    return depth(root) > 0
};

//      5
//     / \
//    1   4
//       / \
//      3   6
const tree = {
    val: 5,
    left: {
        val: 1,
    },
    right: {
        val: 4,
        left: {
            val: 3,
        },
        right: {
            val: 6,
        },
    },
}

console.log(isBalancedTree(tree)) // true
