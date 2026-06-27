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
var isValidBST = function(root) {
    let ans=true
    let traversal=(cur,low,high)=>{
        if (!cur) return true
        if((low!=null && cur.val<=low) || (high!=null && cur.val>=high)){
            return false
        }
        let isleftBST=traversal(cur.left,low,cur.val)
        let isrightBST=traversal(cur.right,cur.val,high)
        return isleftBST&&isrightBST
    }
    ans=traversal(root,null,null)
    return ans
};
// time complexity:O(n)
// space complexity:O(n)