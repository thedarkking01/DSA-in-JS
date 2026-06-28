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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans=[]
    let traversal=(cur)=>{
        cur.left&&traversal(cur.left)
        ans.push(cur.val)
        cur.right&&traversal(cur.right)
    }
    traversal(root)
    return ans[k-1]
};