/*
 * @Author: lin.cao
 * @Date: 2020-05-19 14:43:18
 * @LastEditTime: 2020-05-25 11:04:50
 * @LastEditors: lin.cao
 * @Description: 二叉树后序遍历
 * @FilePath: /leetcode/postOrderTraverse.js
 */
// 递归
const postOrderTraverse = (root) => {
    let result = []

    const postOrderTraverseNode = (node) => {
        if (node) {
            postOrderTraverseNode(node.left)
            postOrderTraverseNode(node.right)
            result.push(node.val)
        }
    }

    postOrderTraverseNode(root)
    return result
}

// 栈
const postOrderTraverseByStack = (root) => {
    const result = []
    const stack = []

    if (root) {
        stack.push(root)
    }
    while (stack.length > 0) {
        const curNode = stack.pop()
        result.unshift(curNode.val)
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

console.log(postOrderTraverse(tree)) // [ 4, 2, 5, 6, 3, 1 ]
console.log(postOrderTraverseByStack(tree)) // [ 4, 2, 5, 6, 3, 1 ]
