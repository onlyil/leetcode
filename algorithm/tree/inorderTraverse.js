/*
 * @Author: lin.cao
 * @Date: 2020-05-25 11:06:13
 * @LastEditTime: 2020-06-03 15:15:45
 * @LastEditors: lin.cao
 * @Description: 二叉树中序序遍历
 * @FilePath: /leetcode/algorithm/tree/inorderTraverse.js
 */
// 递归
const inorderTraverse = (root) => {
    let result = []

    const inorderTraverseNode = (node) => {
        if (node) {
            inorderTraverseNode(node.left)
            result.push(node.val)
            inorderTraverseNode(node.right)
        }
    }

    inorderTraverseNode(root)
    return result
}

// 栈
const inorderTraverseByStack = (root) => {
    const result = []
    const stack = []
    let node = root

    while (stack.length || node) {
        // 向左走到头
        while (node) {
            stack.push(node)
            node = node.left
        }
        // 弹出栈顶
        node = stack.pop()
        result.push(node.val)
        // 跳到右节点
        node = node.right
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

console.log(inorderTraverse(tree)) // [ 4, 2, 1, 5, 3, 6 ]
console.log(inorderTraverseByStack(tree)) // [ 4, 2, 1, 5, 3, 6 ]
