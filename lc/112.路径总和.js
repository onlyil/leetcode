/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // 根节点不存在
    if (!root) {
        return false
    }

    // 叶节点值等于 sum 则说明找到
    if (!root.left && !root.right) {
        return root.val === sum
    }

    // 递归左右子节点继续寻找
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
// @lc code=end
