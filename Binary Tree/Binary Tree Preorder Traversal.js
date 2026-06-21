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
var preorderTraversal = function(root) {
    // by recursion
    let ans=[]
    function traversal(cur){
        if(!cur) return;
        ans.push(cur.val)
        traversal(cur.left)
        traversal(cur.right)
    }
    traversal(root)
    return ans
};

// by iteration
var preorderTraversal = function(root) {
    if(!root) return[];
    let ans=[]
    let stack=[root]
    while(stack.length){
        let cur=stack.pop()
        ans.push(cur.val)
        cur.right && stack.push(cur.right)
        cur.left && stack.push(cur.left)
    }
    return ans
};