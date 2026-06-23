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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans=true
    function calheight(cur){
        if(!cur) return true
        let leftheight=calheight(cur.left)
        let rightheight=calheight(cur.right)
        if(Math.abs(rightheight-leftheight)>1){
            ans=ans&&false
        }
        return 1+Math.max(leftheight,rightheight)
    }
    calheight(root)
    return ans
};