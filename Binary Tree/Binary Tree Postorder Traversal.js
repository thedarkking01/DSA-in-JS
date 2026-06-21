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
 * @return {number[]}
 */

// by recursion
var postorderTraversal = function(root) {
    let ans=[]
    function traversal(cur){
        if(!cur)return;
        traversal(cur.left)
        traversal(cur.right)
        ans.push(cur.val)
    }
    traversal(root)
    return ans
};

// by iteration
var postorderTraversal = function(root) {
    if(!root)return []
    let ans=[]
    let stack=[root]
    while(stack.length){
        let cur=stack.pop()
        ans.push(cur.val)
        cur.left&&stack.push(cur.left)
        cur.right&&stack.push(cur.right) 
    }
    return ans.reverse()
};