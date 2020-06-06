/*
 * @Author: lin.cao
 * @Date: 2020-06-06 12:40:56
 * @LastEditTime: 2020-06-06 12:51:44
 * @LastEditors: lin.cao
 * @Description:  验证二叉搜索树
 * @FilePath: /leetcode/algorithm/tree/isValidBST.js
 */
const isValidBST = (root) => {
    const stack = []
    let lastVal = null
    if (!root) {
        return true
    }
    let node = root

    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        if (lastVal !== null && node.val <= lastVal) {
            return false
        }
        lastVal = node.val
        node = node.right
    }
    return true
}

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

console.log(isValidBST(tree)) // false
console.log(isValidBST(null)) // true
