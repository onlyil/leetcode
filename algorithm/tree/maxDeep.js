/*
 * @Author: lin.cao
 * @Date: 2020-05-18 15:28:42
 * @LastEditTime: 2020-05-18 15:33:10
 * @LastEditors: lin.cao
 * @Description: 二叉树的最大深度
 * @FilePath: /leetcode/maxDeep.js
 */
const maxDeep = (root) => {
    if (!root) {
        return 0
    }
    return 1 + Math.max(maxDeep(root.left), maxDeep(root.right))
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

console.log(maxDeep(tree)) // 3
