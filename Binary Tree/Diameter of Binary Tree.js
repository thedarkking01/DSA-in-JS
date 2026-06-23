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
var diameterOfBinaryTree = function(root) {
    let maxdiameter=0
    let finddepth=(cur)=>{
        if(!cur) return 0
        let leftdepth=finddepth(cur.left)
        let rightdepth=finddepth(cur.right)
        let curdiameter=leftdepth+rightdepth
        maxdiameter=Math.max(curdiameter,maxdiameter)
        return 1 + Math.max(leftdepth,rightdepth)
    }
    finddepth(root)
    return maxdiameter
};