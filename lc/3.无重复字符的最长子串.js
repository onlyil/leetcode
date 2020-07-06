/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const queue = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        const index = queue.indexOf(s[i])
        // 将队列中已有的及其之前的元素出队
        if (index > -1) {
            for (let i = 0; i < index + 1; i++) {
                queue.shift()
            }
        }
        // 新元素入队并更新 max
        queue.push(s[i])
        max = Math.max(max, queue.length)
    }
    return max
};
// 时间复杂度：O(n2)
// 空间复杂度：O(n)
// @lc code=end

