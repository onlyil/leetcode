/*
 * @Author: lin.cao
 * @Date: 2020-05-28 15:07:23
 * @LastEditTime: 2020-05-28 15:57:11
 * @LastEditors: lin.cao
 * @Description: 判断对称二叉树
 * @FilePath: /leetcode/algorithm/tree/isSymmetricTree.js
 */
// 递归
const isSymmetric = (root) => {
    if (!root) return true
    const isEqual = (left, right) => {
        if (!left && !right) return true
        if (!left || !right) return false
        return left.val === right.val
            && isEqual(left.left, right.right)
            && isEqual(left.right, right.left)
    }

    return isEqual(root.left, root.right)
}

// 栈
const isSymmetricByStack = (root) => {
    if (!root) return true

    const stack = [root.left, root.right]
    let result
    while (stack.length) {
        const right = stack.pop()
        const left = stack.pop()
        if (left && right) {
            if (left.val !== right.val) return false
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right)
            stack.push(right.left)
        } else if (left || right) {
            return false
        }
    }
    return true
}

//       1
//     /   \
//    2     2
//   / \   / \
//  3   4 4   3
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
        },
        right: {
            val: 4,
        },
    },
    right: {
        val: 2,
        left: {
            val: 4,
        },
        right: {
            val: 3,
        },
    },
}

console.log(isSymmetric(tree))
console.log(isSymmetricByStack(tree))
