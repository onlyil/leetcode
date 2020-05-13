/*
 * @Author: lin.cao
 * @Date: 2020-05-13 09:18:30
 * @LastEditTime: 2020-05-13 09:39:22
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

const tree = {
    val: 1,
    right: {
        val: 2,
        left: {
            val: 3,
        },
    },
}

console.log(preOrderTraverse(tree)) // [1, 2, 3]
console.log(preOrderTraverseByStack(tree)) // [1, 2, 3]

