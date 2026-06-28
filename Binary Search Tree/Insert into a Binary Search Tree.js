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
 * @param {number} val
 * @return {TreeNode}
 */

// bottom up
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    if(root.val<val){
        root.right=insertIntoBST(root.right,val)
    }
    else{
        root.left=insertIntoBST(root.left,val)
    }
    return root
};

// top down
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    if(root.val<val){
        if(!root.right){
            root.right=new TreeNode(val)
        }
        else{
            insertIntoBST(root.right,val)
        }
    }
    else{
        if(!root.left){
            root.left=new TreeNode(val)
        }
        else{
            insertIntoBST(root.left,val)    
        }
    }
    return root
};