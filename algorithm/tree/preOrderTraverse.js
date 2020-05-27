/*
 * @Author: lin.cao
 * @Date: 2020-05-13 09:18:30
 * @LastEditTime: 2020-05-25 11:05:42
 * @LastEditors: lin.cao
 * @Description: 二叉树前序遍历
 * @FilePath: /leetcode/preOrderTraverse.js
 */
// 递归
const preOrderTraverse = (root) => {
    let result = []

    const preOrderTraverseNode = (node) => {
        if (node) {
            result.push(node.val)
            preOrderTraverseNode(node.left)
            preOrderTraverseNode(node.right)
        }
    }

    preOrderTraverseNode(root)
    return result
}

// 栈
const preOrderTraverseByStack = (root) => {
    let result = []
    let stack = []

    if (root) {
        stack.push(root)
    }
    while (stack.length > 0) {
        const curNode = stack.pop()
        result.push(curNode.val)
        if (curNode.left) {
            stack.push(curNode.left)
        }
        if (curNode.right) {
            stack.push(curNode.right)
        }
    }
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

console.log(preOrderTraverse(tree)) // [ 1, 2, 4, 3, 5, 6 ]
console.log(preOrderTraverseByStack(tree)) // [ 1, 2, 4, 3, 5, 6 ]
