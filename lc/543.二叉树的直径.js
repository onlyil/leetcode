/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0

  let result = 0
  const dfs = (node) => {
    if (!node) return 0
    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)
    result = Math.max(result, leftDepth + rightDepth)
    return Math.max(leftDepth, rightDepth) + 1
  }

  dfs(root)
  return result
};
// @lc code=end

