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
var maxDepth = function(root) {
    // top down approach
    let maxdepth=0
    function traversal(cur,depth){
        if(!cur) return ;
        maxdepth=Math.max(maxdepth,depth)
        traversal(cur.left,depth+1)
        traversal(cur.right,depth+1)
    }
    traversal(root,1)
    return maxdepth

    // bottom up
    if(!root) return 0;
    let leftmax=maxDepth(root.left)
    let rightmax=maxDepth(root.right)
    return 1 + Math.max(leftmax,rightmax)
};
