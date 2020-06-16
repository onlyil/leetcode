/*
 * @Author: lin.cao
 * @Date: 2020-06-16 14:31:53
 * @LastEditTime: 2020-06-16 14:41:56
 * @LastEditors: lin.cao
 * @Description: 二叉树层序遍历
 * @FilePath: /leetcode/algorithm/tree/levelOrderTraverse.js
 */
// 深度优先遍历
const levelOrderTraverse = (root) => {
    const result = []
    const levelOrderTraverseNode = (node, depth) => {
        if (!node) return
        result[depth] = result[depth] || []
        result[depth].push(node.val)
        levelOrderTraverseNode(node.left, depth + 1)
        levelOrderTraverseNode(node.right, depth + 1)
    }
    levelOrderTraverseNode(root, 0)
    return result
}

//      1
//     / \
//    2   3
//   /   / \
//  4   5   6
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
        },
    },
    right: {
        val: 3,
        left: {
            val: 5,
        },
        right: {
            val: 6,
        },
    },
}

console.log(levelOrderTraverse(tree)) // [ [ 1 ], [ 2, 3 ], [ 4, 5, 6 ] ]
